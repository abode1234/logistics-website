"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export default function ImportExportPage() {
  const { language } = useLanguage()

  const services = [
    {
      icon: <span className="text-4xl">🚢</span>,
      title: language === "ar" ? "الشحن البحري" : "Sea Freight",
      description: language === "ar" ? "خدمات شحن بحري موثوقة لجميع أنواع البضائع" : "Reliable sea shipping for all cargo types",
    },
    {
      icon: <span className="text-4xl">✈️</span>,
      title: language === "ar" ? "الشحن الجوي" : "Air Freight",
      description: language === "ar" ? "شحن جوي سريع للبضائع العاجلة والحساسة" : "Fast air cargo for urgent and sensitive goods",
    },
    {
      icon: <span className="text-4xl">🚛</span>,
      title: language === "ar" ? "النقل البري" : "Land Transport",
      description: language === "ar" ? "شبكة نقل بري واسعة تغطي جميع المناطق" : "Wide land transport network covering all regions",
    },
    {
      icon: <span className="text-4xl">📋</span>,
      title: language === "ar" ? "التخليص الجمركي" : "Customs Clearance",
      description: language === "ar" ? "خدمات تخليص جمركي سريعة ومتخصصة" : "Fast, specialized customs clearance services",
    },
    {
      icon: <span className="text-4xl">🛡️</span>,
      title: language === "ar" ? "التأمين" : "Insurance",
      description: language === "ar" ? "تأمين شامل للبضائع أثناء النقل" : "Comprehensive cargo insurance during transport",
    },
    {
      icon: <span className="text-4xl">⏰</span>,
      title: language === "ar" ? "التتبع المباشر" : "Real-time Tracking",
      description: language === "ar" ? "نظام تتبع متطور لمراقبة الشحنات" : "Advanced tracking to monitor shipments",
    },
  ]

  const countries =
    language === "ar"
      ? [
          "الإمارات العربية المتحدة",
          "المملكة العربية السعودية",
          "قطر",
          "الكويت",
          "البحرين",
          "عمان",
          "الأردن",
          "لبنان",
          "مصر",
          "تركيا",
          "الهند",
          "الصين",
        ]
      : [
          "United Arab Emirates",
          "Saudi Arabia",
          "Qatar",
          "Kuwait",
          "Bahrain",
          "Oman",
          "Jordan",
          "Lebanon",
          "Egypt",
          "Turkey",
          "India",
          "China",
        ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-sky-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
            {language === "ar" ? "الاستيراد والتصدير" : "Import & Export"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom delay-300 duration-1000">
            {language === "ar"
              ? "شريكك الموثوق في عمليات الاستيراد والتصدير مع شبكة عالمية واسعة وخدمات متكاملة"
              : "Your trusted partner for import and export with a wide global network and integrated services"}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-in fade-in slide-in-from-bottom duration-800">
            {language === "ar" ? "خدماتنا المتخصصة" : "Our Specialized Services"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-in fade-in slide-in-from-bottom duration-800">
            {language === "ar" ? "الدول التي نخدمها" : "Countries We Serve"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {countries.map((country, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${(index + 1) * 50}ms` }}
              >
                <span className="font-medium text-foreground hover:text-primary transition-colors duration-300">{country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-in fade-in slide-in-from-bottom duration-800">
            {language === "ar" ? "عملية العمل" : "Process"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-in fade-in slide-in-from-bottom delay-100 duration-700 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {language === "ar" ? "الاستشارة" : "Consultation"}
              </h3>
              <p className="text-muted-foreground">تحليل احتياجاتكم ووضع الخطة المناسبة</p>
            </div>
            <div className="text-center animate-in fade-in slide-in-from-bottom delay-200 duration-700 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {language === "ar" ? "التخطيط" : "Planning"}
              </h3>
              <p className="text-muted-foreground">وضع خطة شاملة للشحن والتخليص</p>
            </div>
            <div className="text-center animate-in fade-in slide-in-from-bottom delay-300 duration-700 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {language === "ar" ? "التنفيذ" : "Execution"}
              </h3>
              <p className="text-muted-foreground">تنفيذ عملية الشحن مع المتابعة المستمرة</p>
            </div>
            <div className="text-center animate-in fade-in slide-in-from-bottom delay-400 duration-700 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-primary-foreground">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {language === "ar" ? "التسليم" : "Delivery"}
              </h3>
              <p className="text-muted-foreground">تسليم البضائع في الوقت المحدد</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-sky-300 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300 rounded-full animate-ping delay-500"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 animate-in fade-in slide-in-from-bottom duration-800">
            {language === "ar" ? "ابدأ رحلتك التجارية معنا" : "Start your business journey with us"}
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-in fade-in slide-in-from-bottom delay-300 duration-800">
            {language === "ar" ? "احصل على عرض أسعار مخصص لاحتياجاتك في الاستيراد والتصدير" : "Get a tailored quote for your import and export needs"}
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom delay-600"
          >
            {language === "ar" ? "احصل على عرض أسعار" : "Get a Quote"}
          </a>
        </div>
      </section>
    </div>
  )
}
