import React, { useState } from 'react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const proMonthly = 45000;
  const proPrice = billingCycle === 'yearly' ? proMonthly * 0.8 : proMonthly;

  return (
    <section id="pricing" className="py-24 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#0057D2] text-xs font-bold mb-4 border border-blue-200">
            <span style={{ fontFamily: 'Tajawal, sans-serif' }}>خطط استثمارية شفافة</span>
          </div>
          <h2
            style={{ fontFamily: 'Tajawal, sans-serif' }}
            className="text-3xl sm:text-5xl font-black text-[#0A2540] tracking-tight mb-4"
          >
            اختر الخطة المناسبة لحجم أعمالك
          </h2>
          <p
            style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
            className="text-base sm:text-lg text-[#6B7A8F] leading-relaxed mb-8"
          >
            باقات مرنة ومصممة لتمنحك أقصى إنتاجية بأقل تكلفة مع دعم فني مستمر وتحديثات مجانية.
          </p>

          {/* Billing Cycle Toggle (Stripe / Vercel style) */}
          <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-white border border-gray-200 shadow-sm">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              style={{ fontFamily: 'Tajawal, sans-serif' }}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-[#0070F3] text-white shadow-md'
                  : 'text-[#6B7A8F] hover:text-[#0A2540]'
              }`}
            >
              الدفع الشهري
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              style={{ fontFamily: 'Tajawal, sans-serif' }}
              className={`px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'bg-[#0070F3] text-white shadow-md'
                  : 'text-[#6B7A8F] hover:text-[#0A2540]'
              }`}
            >
              <span>الدفع السنوي</span>
              <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                billingCycle === 'yearly' ? 'bg-white text-[#0070F3]' : 'bg-emerald-100 text-emerald-800'
              }`}>
                وفر 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Starter (White Card) */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 style={{ fontFamily: 'Tajawal, sans-serif' }} className="text-2xl font-black text-[#0A2540]">
                  Starter
                </h3>
                <span style={{ fontFamily: 'Tajawal, sans-serif' }} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-[#0A2540] font-bold">
                  للمحلات والناشئة
                </span>
              </div>
              <p style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }} className="text-sm text-[#6B7A8F] mb-6">
                الحل الاقتصادي الميسر لنقاط البيع المفردة والمؤسسات الصغيرة.
              </p>
              
              <div className="mb-4 pb-6 border-b border-gray-100">
                <div className="flex items-baseline gap-1">
                  <span style={{ fontFamily: '"Space Grotesk", monospace' }} className="text-5xl font-black text-[#0A2540] tracking-tight">
                    50,000
                  </span>
                  <span style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }} className="text-sm text-[#6B7A8F]">
                    ريال / سنوياً
                  </span>
                </div>
                <div style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }} className="mt-3.5 p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-[#0057D2] font-semibold flex items-center gap-1.5">
                  <span className="text-sm">✦</span>
                  <span>متاح السداد على 4 أقساط ميسرة (12,500 ريال لكل قسط)</span>
                </div>
              </div>

              <div style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }} className="space-y-3 text-sm text-[#0A2540] mb-8">
                <div style={{ fontFamily: 'Tajawal, sans-serif' }} className="text-xs font-bold text-[#6B7A8F] uppercase tracking-wider mb-2">
                  المزايا المتضمنة:
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[#0057D2] font-bold">✓</span>
                  <span>مستخدم واحد رئيسي (مدير النظام)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[#0057D2] font-bold">✓</span>
                  <span>فواتير مبيعات ومشتريات غير محدودة</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[#0057D2] font-bold">✓</span>
                  <span>إدارة الصندوق ونقطة بيع سريعة (POS)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[#0057D2] font-bold">✓</span>
                  <span>إدارة المصروفات والإيرادات اليومية</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[#0057D2] font-bold">✓</span>
                  <span>إدارة المخزون الأساسية وجرد الأصناف</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[#0057D2] font-bold">✓</span>
                  <span>التقارير المالية الأساسية وحسابات الذمم</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[#0057D2] font-bold">✓</span>
                  <span>نسخ احتياطي يومي سحابي وتحديثات مجانية</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/967773586047?text=أرغب في الاشتراك بباقة Starter"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'Tajawal, sans-serif' }}
              className="w-full block text-center py-3.5 rounded-xl bg-white border border-gray-300 text-[#0A2540] font-bold hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm"
            >
              اشترك الآن
            </a>
          </div>

          {/* Card 2: Pro (Dark Card with Gold Frame & Glowing Badge) */}
          <div className="bg-[#0A192F] text-white p-8 rounded-2xl border-2 border-[#C9A227] shadow-2xl relative lg:-translate-y-4 flex flex-col justify-between hover:shadow-[0_0_35px_rgba(201,162,39,0.3)] transition-all duration-300">
            {/* Glowing Golden Badge */}
            <div
              style={{ fontFamily: 'Tajawal, sans-serif' }}
              className="absolute -top-4 right-8 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#C9A227] to-[#DFB943] text-[#0A192F] text-xs font-black shadow-lg"
            >
              الأكثر شعبية ونمواً
            </div>

            <div>
              <div className="flex justify-between items-center mb-3 pt-2">
                <h3 style={{ fontFamily: 'Tajawal, sans-serif' }} className="text-2xl font-black text-white">
                  Pro
                </h3>
                <span style={{ fontFamily: 'Tajawal, sans-serif' }} className="text-xs px-3 py-1 rounded-full bg-white/10 text-emerald-300 font-bold border border-emerald-400/30">
                  للشركات المتوسطة
                </span>
              </div>
              <p style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }} className="text-sm text-slate-300 mb-6">
                المنظومة المحاسبية المتكاملة لإدارة الفروع المتعددة وأسعار الصرف.
              </p>
              
              <div className="mb-4 pb-6 border-b border-white/10">
                <div className="flex items-baseline gap-1">
                  <span style={{ fontFamily: '"Space Grotesk", monospace' }} className="text-5xl font-black text-white tracking-tight">
                    {proPrice.toLocaleString()}
                  </span>
                  <span style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }} className="text-sm text-slate-300">
                    ريال / شهرياً
                  </span>
                </div>
                <p style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }} className="text-xs text-[#C9A227] mt-2 font-medium">
                  {billingCycle === 'yearly' ? 'فوترة سنوية (تم تطبيق خصم 20%)' : 'فوترة شهرية مرنة'}
                </p>
              </div>

              <div style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }} className="space-y-3 text-sm text-slate-200 mb-8">
                <div style={{ fontFamily: 'Tajawal, sans-serif' }} className="text-xs font-bold text-[#C9A227] uppercase tracking-wider mb-2">
                  كل مزايا Starter بالإضافة إلى:
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[#C9A227] font-bold">✓</span>
                  <span>حتى 5 مستخدمين بصلاحيات أمان مخصصة</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[#C9A227] font-bold">✓</span>
                  <span>حتى 3 فروع و5 مستودعات مترابطة لحظياً</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[#C9A227] font-bold">✓</span>
                  <span>تعدد العملات وأسعار الصرف وفروقها آلياً</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[#C9A227] font-bold">✓</span>
                  <span>الموارد البشرية، مسير الرواتب، والسلف</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[#C9A227] font-bold">✓</span>
                  <span>إدارة الأصول الثابتة وحساب الإهلاك الآلي</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[#C9A227] font-bold">✓</span>
                  <span>ميزان المراجعة، الأرباح والخسائر، والميزانية</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[#C9A227] font-bold">✓</span>
                  <span>أولوية في الدعم الفني المباشر والمتابعة</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/967773586047?text=أرغب في تجربة باقة Pro"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'Tajawal, sans-serif' }}
              className="w-full block text-center py-4 rounded-xl bg-gradient-to-r from-[#0070F3] to-[#0057D2] hover:from-[#0059C9] hover:to-[#0046A8] text-white font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-blue-500/30"
            >
              ابدأ الآن مع باقة Pro
            </a>
          </div>

          {/* Card 3: Enterprise (Light Gray Card) */}
          <div className="bg-[#F1F3F5] p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 style={{ fontFamily: 'Tajawal, sans-serif' }} className="text-2xl font-black text-[#0A2540]">
                  Enterprise
                </h3>
                <span style={{ fontFamily: 'Tajawal, sans-serif' }} className="text-xs px-3 py-1 rounded-full bg-[#0A2540] text-white font-bold">
                  للمجموعات الكبرى
                </span>
              </div>
              <p style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }} className="text-sm text-[#6B7A8F] mb-6">
                حلول برمجية مخصصة للشركات الضخمة وسلاسل التوريد.
              </p>
              
              <div className="mb-4 pb-6 border-b border-gray-300">
                <div className="flex items-baseline gap-1">
                  <span style={{ fontFamily: 'Tajawal, sans-serif' }} className="text-4xl font-black text-[#0A2540] tracking-tight">
                    تواصل معنا
                  </span>
                </div>
                <p style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }} className="text-xs text-[#6B7A8F] mt-2">
                  تسعير مخصص بحسب عدد الفروع والمتطلبات الخاصة
                </p>
              </div>

              <div style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }} className="space-y-3 text-sm text-[#0A2540] mb-8">
                <div style={{ fontFamily: 'Tajawal, sans-serif' }} className="text-xs font-bold text-[#6B7A8F] uppercase tracking-wider mb-2">
                  مزايا استثنائية للمؤسسات:
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[#0057D2] font-bold">✓</span>
                  <span>عدد مستخدمين وفروع ومستودعات غير محدود</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[#0057D2] font-bold">✓</span>
                  <span>تخصيص كامل لدورات العمل ونماذج الطباعة</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[#0057D2] font-bold">✓</span>
                  <span>ربط واجهات برمجية API مع التطبيقات الخارجية</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[#0057D2] font-bold">✓</span>
                  <span>خادم سحابي مخصص مع عزل أمني تام</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[#0057D2] font-bold">✓</span>
                  <span>ترحيل بياناتك السابقة مجاناً بدون انقطاع</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[#0057D2] font-bold">✓</span>
                  <span>مدير حساب تقني مخصص مع تدريب ميداني</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/967773586047?text=أرغب في استشارة لباقة Enterprise"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'Tajawal, sans-serif' }}
              className="w-full block text-center py-3.5 rounded-xl bg-[#0A2540] text-white font-bold hover:bg-[#112B4F] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm"
            >
              تواصل مع المبيعات
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
