-- ====================================================================
-- MeDo ERP SaaS - Supabase Database Schema (Phase 1)
-- ====================================================================

-- 1. Blog Posts Table
CREATE TABLE IF NOT EXISTS public.blog_posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    slug VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    author VARCHAR(100) DEFAULT 'فريق MeDo ERP',
    published BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Contact Messages Table (For inquiries and demo requests)
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    business_type VARCHAR(100),
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'NEW' NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ====================================================================
-- Enable Row Level Security (RLS)
-- ====================================================================
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- ====================================================================
-- RLS Policies
-- ====================================================================

-- Blog Posts: Anyone can read published blog posts
CREATE POLICY "Public blog posts are viewable by everyone" 
    ON public.blog_posts 
    FOR SELECT 
    USING (published = true);

-- Contact Messages: Anyone can insert a contact message (Public inquiries)
CREATE POLICY "Anyone can submit a contact message" 
    ON public.contact_messages 
    FOR INSERT 
    WITH CHECK (true);

-- Newsletter Subscribers: Anyone can subscribe with email
CREATE POLICY "Anyone can subscribe to newsletter" 
    ON public.newsletter_subscribers 
    FOR INSERT 
    WITH CHECK (true);

-- ====================================================================
-- Seed Initial Blog Posts (3 Articles)
-- ====================================================================
INSERT INTO public.blog_posts (slug, title, excerpt, content, category, author, published)
VALUES 
(
    'how-to-choose-accounting-system',
    'كيف تختار نظام محاسبي مناسب لمحلك التجاري؟',
    'أهم المعايير لاختيار نقطة بيع ذكية تدعم الباركود السريع وتمنع العجز المالي وتعمل دون توقف عند انقطاع الشبكة.',
    '<p>اختيار النظام المحاسبي المناسب لمحل تجاري أو منشأة ناشئة هو القرار الأهم الذي يحدد نجاحك المالي والتشغيلي. في السوق اليمني، تتطلب الأنشطة التجارية خصوصية في التعامل مع تعدد العملات وفروق أسعار الصرف.</p><p>1. <strong>خاصية العمل دون إنترنت (Offline-First):</strong> انقطاعات الإنترنت المتكررة تعني أن نظامك يجب أن يستمر في بيع وتسجيل الفواتير محلياً ومزامنتها لاحقاً.</p><p>2. <strong>دعم الباركود والأجهزة المتعددة:</strong> سرعة إصدار الفواتير تقلل الطوابير وتزيد رضاء العملاء.</p>',
    'أنظمة التجزئة',
    'فريق MeDo ERP',
    true
),
(
    'common-accounting-errors-yemen',
    '5 أخطاء محاسبية شائعة في السوق اليمني وكيفية تجنبها',
    'تجاهل فروق الصرف، تأخير إدخال المشتريات، والجرد اليدوي — أسباب تؤدي لخسائر خفية وكيف يعالجها ERP السحابي آلياً.',
    '<p>يعاني كثير من أصحاب الأنشطة التجارية من تراجع الأرباح بالرغم من زيادة حجم المبيعات، وغالباً ما يكون السبب وجود أخطاء محاسبية متكررة:</p><ul><li>الخلط بين أرصدة العملات (ريال قديم وجديد وسعودي).</li><li>عدم جرد المخزون بشكل دوري مما يؤدي لتلف البضائع.</li><li>الاعتماد على الدفاتر الورقية في تتبع الديون والذمم.</li></ul><p>باستخدام منظومة سحابية متكاملة، يتم تلافي كل هذه الأخطاء ومعالجتها لحظياً.</p>',
    'إدارة مالية',
    'أ. مروان العريقي',
    true
),
(
    'cloud-erp-transformation-guide',
    'دليل الانتقال بأعمالك إلى السحابة خطوة بخطوة',
    'لماذا يتخلى كبار التجار عن السيرفرات المحلية المكلفة ويتجهون إلى المنظومات السحابية الآمنة وذات النسخ الاحتياطي التلقائي.',
    '<p>انتقلت الشركات الكبرى في العالم من خوادم الكمبيوتر المحلية المرتفعة التكلفة إلى الحوسبة السحابية الآمنة. إليك كيف تبدأ الانتقال:</p><p>1. تدقيق بياناتك الحالية وترتيب دليل الحسابات.</p><p>2. استيراد الأرصدة الافتتاحية عبر قوالب جاهزة.</p><p>3. تدريب فريق العمل على الواجهة السحابية.</p><p>تمنحك السحابة مرونة الوصول لتقاريرك من أي مكان وفي أي وقت.</p>',
    'الحوسبة السحابية',
    'فريق MeDo ERP',
    true
)
ON CONFLICT (slug) DO NOTHING;
