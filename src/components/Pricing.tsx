import React, { useState } from 'react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const proMonthly = 45000;
  const proPrice = billingCycle === 'yearly' ? proMonthly * 0.8 : proMonthly;

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0057d2] text-xs font-bold mb-4 border border-blue-200">
            <span>خطط وأسعار شفافة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A192F] tracking-tight mb-4">
            استثمار مرن ينمو مع حجم أعمالك
          </h2>
          <p className="text-base sm:text-lg text-[#5A6872] leading-relaxed mb-8">
            اختر الخطة المناسبة لحجم منشأتك مع ضمان أفضل عائد استثماري ودعم فني مستمر.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 rounded-full bg-[#F5F6F7] border border-[#E5E9EC] shadow-inner">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-[#0057d2] shadow-sm'
                  : 'text-[#5A6872] hover:text-[#1D2D3E]'
              }`}
            >
              الدفع الشهري
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-[#0057d2] text-white shadow-sm'
                  : 'text-[#5A6872] hover:text-[#1D2D3E]'
              }`}
            >
              <span>الدفع السنوي</span>
              <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                billingCycle === 'yearly' ? 'bg-white text-[#0057d2]' : 'bg-emerald-100 text-emerald-800'
              }`}>
                خصم 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Plan 1: Starter (Fixed Annual with Installments) */}
          <div className="bg-[#F5F6F7] p-8 rounded-lg border border-[#E5E9EC] hover:border-gray-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold text-[#0A192F]">Starter</h3>
                <span className="text-xs px-2.5 py-1 rounded bg-gray-200 text-[#1D2D3E] font-semibold">للمحلات والناشئة</span>
              </div>
              <p className="text-sm text-[#5A6872] mb-6">حل سحابي ميسر للمحلات الفردية ونقاط البيع الصغيرة.</p>
              
              <div className="mb-4 pb-6 border-b border-gray-300">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-[#0A192F] tracking-tight">50,000</span>
                  <span className="text-sm text-[#5A6872]">ريال يمني / سنوياً</span>
                </div>
                <div className="mt-3 p-2.5 rounded bg-blue-50 border border-blue-100 text-xs text-[#0057d2] font-semibold flex items-center gap-1.5">
                  <span>✦</span>
                  <span>متاح السداد على 4 أقساط ميسرة (12,500 ريال لكل قسط)</span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-[#1D2D3E] mb-8">
                <div className="text-xs font-bold text-[#5A6872] uppercase tracking-wider mb-2">المزايا المشمولة:</div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0057d2] font-bold">✓</span>
                  <span>مستخدم واحد رئيسي (مدير النظام)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0057d2] font-bold">✓</span>
                  <span>فواتير مبيعات ومشتريات غير محدودة</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0057d2] font-bold">✓</span>
                  <span>إدارة الصندوق ونقطة بيع سريعة (POS)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0057d2] font-bold">✓</span>
                  <span>إدارة المصروفات والإيرادات اليومية</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0057d2] font-bold">✓</span>
                  <span>إدارة المخزون الأساسية وجرد الأصناف</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0057d2] font-bold">✓</span>
                  <span>التقارير المالية الأساسية وحسابات الذمم</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0057d2] font-bold">✓</span>
                  <span>نسخ احتياطي يومي سحابي وتحديثات مجانية</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/967773586047?text=أرغب في الاشتراك بباقة Starter"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center py-3.5 rounded-lg bg-white border border-[#E5E9EC] text-[#0A192F] font-bold hover:bg-gray-100 transition shadow-xs"
            >
              اشترك الآن
            </a>
          </div>

          {/* Plan 2: Pro (Most Popular SAP Card) */}
          <div className="bg-white p-8 rounded-lg border-2 border-[#0057d2] shadow-2xl relative lg:-translate-y-4 flex flex-col justify-between">
            <div className="absolute -top-3.5 right-8 px-4 py-1 rounded-full bg-[#0057d2] text-white text-xs font-bold shadow-md">
              الخيار الأكثر شعبية
            </div>

            <div>
              <div className="flex justify-between items-center mb-2 pt-2">
                <h3 className="text-2xl font-bold text-[#0057d2]">Pro</h3>
                <span className="text-xs px-2.5 py-1 rounded bg-blue-50 text-[#0057d2] font-semibold border border-blue-200">للشركات المتوسطة</span>
              </div>
              <p className="text-sm text-[#5A6872] mb-6">النظام المتكامل للشركات والمؤسسات التي تحتاج تعدد الفروع والمستخدمين.</p>
              
              <div className="mb-4 pb-6 border-b border-gray-200">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-[#0A192F] tracking-tight">{proPrice.toLocaleString()}</span>
                  <span className="text-sm text-[#5A6872]">ريال / شهرياً</span>
                </div>
                <p className="text-xs text-[#5A6872] mt-2">
                  {billingCycle === 'yearly' ? 'تتم الفوترة سنوياً (وفرت 20% بالكامل)' : 'فوترة شهرية مرنة'}
                </p>
              </div>

              <div className="space-y-3 text-sm text-[#1D2D3E] mb-8">
                <div className="text-xs font-bold text-[#0057d2] uppercase tracking-wider mb-2">جميع مزايا Starter بالإضافة إلى:</div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0057d2] font-bold">✓</span>
                  <span>حتى 5 مستخدمين بصلاحيات مخصصة</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0057d2] font-bold">✓</span>
                  <span>حتى 3 فروع و5 مستودعات مترابطة</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0057d2] font-bold">✓</span>
                  <span>تعدد العملات وأسعار الصرف المتغيرة وفروقها</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0057d2] font-bold">✓</span>
                  <span>الموارد البشرية، مسير الرواتب، والسلف</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0057d2] font-bold">✓</span>
                  <span>إدارة الأصول الثابتة وحساب الإهلاك الآلي</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0057d2] font-bold">✓</span>
                  <span>ميزان المراجعة، الأرباح والخسائر، والميزانية</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0057d2] font-bold">✓</span>
                  <span>دعم فني مخصص ذو أولوية عبر الهاتف والواتساب</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/967773586047?text=أرغب في تجربة باقة Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center py-4 rounded-lg bg-[#0057d2] hover:bg-[#0046a8] text-white font-bold transition shadow-lg hover:shadow-blue-500/25"
            >
              ابدأ الآن مع باقة Pro
            </a>
          </div>

          {/* Plan 3: Enterprise (Custom Solutions) */}
          <div className="bg-[#F5F6F7] p-8 rounded-lg border border-[#E5E9EC] hover:border-gray-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold text-[#0A192F]">Enterprise</h3>
                <span className="text-xs px-2.5 py-1 rounded bg-[#0A192F] text-white font-semibold">للمجموعات الكبرى</span>
              </div>
              <p className="text-sm text-[#5A6872] mb-6">حلول برمجية مخصصة للشركات الضخمة وسلاسل التوريد الكبيرة.</p>
              
              <div className="mb-4 pb-6 border-b border-gray-300">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-black text-[#0A192F] tracking-tight">تواصل معنا</span>
                </div>
                <p className="text-xs text-[#5A6872] mt-2">تسعير مخصص بحسب عدد الفروع والمتطلبات الخاصة</p>
              </div>

              <div className="space-y-3 text-sm text-[#1D2D3E] mb-8">
                <div className="text-xs font-bold text-[#5A6872] uppercase tracking-wider mb-2">مزايا حصرية للمؤسسات:</div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0057d2] font-bold">✓</span>
                  <span>عدد مستخدمين وفروع ومستودعات غير محدود</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0057d2] font-bold">✓</span>
                  <span>تخصيص كامل لدورات العمل والمستندات</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0057d2] font-bold">✓</span>
                  <span>ربط واجهات برمجية API مع التطبيقات الخارجية</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0057d2] font-bold">✓</span>
                  <span>خادم سحابي مخصص مع عزل أمني كامل</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0057d2] font-bold">✓</span>
                  <span>ترحيل بياناتك السابقة من أي نظام قديم مجاناً</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0057d2] font-bold">✓</span>
                  <span>مدير حساب وتقني مخصص مع تدريب ميداني</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/967773586047?text=أرغب في استشارة لباقة Enterprise"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center py-3.5 rounded-lg bg-[#0A192F] hover:bg-[#1D2D3E] text-white font-bold transition shadow-xs"
            >
              تواصل مع فريق المبيعات
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
