import React, { useState } from 'react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const proPrice = billingCycle === 'yearly' ? 45000 * 0.8 : 45000;

  return (
    <section id="pricing" className="py-20 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A192F] mb-3">خطط الأسعار</h2>
          <div className="flex items-center justify-center gap-3 pt-6">
            <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-[#0057d2]' : 'text-[#5A6872]'}`}>شهري</span>
            <button onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')} className="relative inline-flex h-8 w-16 items-center rounded-full bg-[#0A192F]">
              <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${billingCycle === 'yearly' ? '-translate-x-9' : '-translate-x-1'}`} />
            </button>
            <span className={`text-sm font-semibold ${billingCycle === 'yearly' ? 'text-[#0057d2]' : 'text-[#5A6872]'}`}>سنوي</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">خصم 20%</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter - سعر سنوي ثابت */}
          <div className="bg-[#F5F6F7] p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-[#0A192F]">Starter</h3>
            <p className="text-sm text-[#5A6872] mb-4">للمحلات والمؤسسات الناشئة</p>
            <div className="my-6">
              <span className="text-4xl font-extrabold text-[#0A192F]">50,000</span>
              <span className="text-sm text-[#5A6872] mr-1">ريال / سنوياً</span>
            </div>
            <p className="text-xs text-[#0057d2] font-semibold mb-4">متاح السداد على 4 أقساط (12,500 ريال لكل قسط)</p>
            <ul className="space-y-2 text-sm text-[#1D2D3E] pt-4 border-t border-gray-300">
              <li>✓ مستخدم واحد (مدير النظام)</li>
              <li>✓ فواتير مبيعات ومشتريات غير محدودة</li>
              <li>✓ إدارة الصندوق والبنوك</li>
              <li>✓ إدارة المصروفات والإيرادات</li>
              <li>✓ إدارة المخزون الأساسية</li>
              <li>✓ التقارير المالية الأساسية</li>
              <li>✓ إدارة المدينين والدائنين</li>
              <li>✓ النسخ الاحتياطي اليومي</li>
            </ul>
            <a href="#contact" className="mt-6 block text-center py-3 rounded-lg bg-white border border-gray-300 text-[#0A192F] font-semibold hover:bg-gray-100">اشترك الآن</a>
          </div>
          {/* Pro */}
          <div className="bg-white p-8 rounded-lg border-2 border-[#0057d2] relative md:-translate-y-3 shadow-xl">
            <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-[#0057d2] text-white text-xs font-bold">الأكثر شعبية</div>
            <h3 className="text-xl font-bold text-[#0057d2]">Pro</h3>
            <p className="text-sm text-[#5A6872] mb-4">للشركات المتوسطة</p>
            <div className="my-6">
              <span className="text-4xl font-extrabold text-[#0A192F]">{proPrice.toLocaleString()}</span>
              <span className="text-sm text-[#5A6872] mr-1">ريال / شهرياً</span>
            </div>
            <ul className="space-y-2 text-sm text-[#1D2D3E] pt-4 border-t border-gray-200">
              <li>✓ حتى 5 مستخدمين</li>
              <li>✓ حتى 3 فروع و5 مستودعات</li>
              <li>✓ تعدد العملات وأسعار الصرف</li>
              <li>✓ الموارد البشرية والرواتب</li>
              <li>✓ الأصول الثابتة والإهلاك</li>
              <li>✓ ميزان المراجعة وقائمة الدخل</li>
            </ul>
            <a href="#contact" className="mt-6 block text-center py-3 rounded-lg bg-[#0057d2] text-white font-bold hover:bg-[#0046a8]">اشترك الآن</a>
          </div>
          {/* Enterprise */}
          <div className="bg-[#F5F6F7] p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-[#0A192F]">Enterprise</h3>
            <p className="text-sm text-[#5A6872] mb-4">للمجموعات الكبرى</p>
            <div className="my-6">
              <span className="text-3xl font-extrabold text-[#0A192F]">تواصل معنا</span>
            </div>
            <ul className="space-y-2 text-sm text-[#1D2D3E] pt-4 border-t border-gray-300">
              <li>✓ مستخدمون وفروع غير محدود</li>
              <li>✓ تخصيص كامل للدورات</li>
              <li>✓ ربط واجهات API</li>
              <li>✓ خادم سحابي مخصص</li>
              <li>✓ مدير حساب مخصص</li>
            </ul>
            <a href="#contact" className="mt-6 block text-center py-3 rounded-lg bg-[#0A192F] text-white font-semibold hover:bg-[#1D2D3E]">تواصل مع المبيعات</a>
          </div>
        </div>
      </div>
    </section>
  );
}
