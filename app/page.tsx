"use client"

import Image from "next/image"
import { Ship, Plane, Truck, Shield, Globe, Award } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { useLanguage } from "@/contexts/language-context"

export default function HomePage() {
  const { t, isRTL } = useLanguage()

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 text-white overflow-hidden"
        style={{
          minHeight: "500px",
          background: "linear-gradient(135deg, #1e40af 0%, #2563eb 100%)",
        }}
        aria-labelledby="hero-title"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right" duration={1000}>
              <div className="space-y-6">
                <AnimatedSection animation="fade-up" delay={300} duration={700}>
                  <Badge variant="secondary" className="w-fit bg-blue-100 text-blue-800">
                    {t("home.heroTitle")}
                  </Badge>
                </AnimatedSection>
                <AnimatedSection animation="fade-right" delay={500} duration={1000}>
                  <h1 id="hero-title" className="text-4xl lg:text-6xl font-bold leading-tight text-white">
                    {t("home.heroSubtitle")}
                    <AnimatedSection animation="fade-right" delay={700} duration={1000} className="block">
                      <span className="text-blue-100">{t("home.heroTitle")}</span>
                    </AnimatedSection>
                  </h1>
                </AnimatedSection>
                <AnimatedSection animation="fade-right" delay={1000} duration={1000}>
                  <p className="text-xl leading-relaxed text-blue-50">{t("home.heroDescription")}</p>
                </AnimatedSection>
                <AnimatedSection animation="fade-up" delay={1200} duration={1000}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="text-lg px-8 hover:scale-105 transition-all duration-300 hover:shadow-lg bg-blue-600 hover:bg-blue-700 text-white"
                      aria-label={`${t("common.requestService")} - Get started with our logistics services`}
                    >
                      {t("common.requestService")} {isRTL ? "←" : "→"}
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 bg-transparent hover:bg-white/10 hover:scale-105 transition-all duration-300 border-white text-white"
                      aria-label={`${t("common.learnMore")} - Discover more about our services`}
                    >
                      {t("common.learnMore")}
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-left" duration={1000} delay={300}>
              <div className="relative">
                <Image
                  src="/warehouse.jpg"
                  alt="Modern logistics warehouse with trucks and containers showing our state-of-the-art facilities"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500 hover:shadow-3xl"
                  priority
                />
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-sky-400/20 rounded-full animate-bounce delay-1000"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection animation="fade-up" delay={100} duration={700}>
              <div className="text-center group">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-gray-600">{t("home.statsClients")}</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200} duration={700}>
              <div className="text-center group">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <div className="text-gray-600">{t("home.statsCountries")}</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={300} duration={700}>
              <div className="text-center group">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  1000+
                </div>
                <div className="text-gray-600">{t("home.statsShipments")}</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={400} duration={700}>
              <div className="text-center group">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  15+
                </div>
                <div className="text-gray-600">{t("home.statsExperience")}</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" duration={800} className="text-center mb-16">
            <AnimatedSection animation="fade-up" delay={200} duration={600}>
              <Badge variant="outline" className="mb-4">
                {t("home.servicesTitle")}
              </Badge>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={300} duration={800}>
              <h2 className="text-4xl font-bold mb-4">{t("home.servicesTitle")}</h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={500} duration={800}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("home.servicesSubtitle")}</p>
            </AnimatedSection>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up" delay={100} duration={500}>
              <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300">
                    <Ship className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">
                    {t("home.seaFreight")}
                  </CardTitle>
                  <CardDescription>{t("home.seaFreightDesc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm hover:translate-x-1 transition-transform duration-200">
                      <span className="text-green-500 ml-2">✓</span>
                      Full Container Load (FCL)
                    </li>
                    <li className="flex items-center text-sm hover:translate-x-1 transition-transform duration-200">
                      <span className="text-green-500 ml-2">✓</span>
                      Less Container Load (LCL)
                    </li>
                    <li className="flex items-center text-sm hover:translate-x-1 transition-transform duration-200">
                      <span className="text-green-500 ml-2">✓</span>
                      Shipment Tracking
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200} duration={500}>
              <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300">
                    <Plane className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">
                    {t("home.airFreight")}
                  </CardTitle>
                  <CardDescription>{t("home.airFreightDesc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm hover:translate-x-1 transition-transform duration-200">
                      <span className="text-green-500 ml-2">✓</span>
                      Express 24-48 hours
                    </li>
                    <li className="flex items-center text-sm hover:translate-x-1 transition-transform duration-200">
                      <span className="text-green-500 ml-2">✓</span>
                      Time-sensitive cargo
                    </li>
                    <li className="flex items-center text-sm hover:translate-x-1 transition-transform duration-200">
                      <span className="text-green-500 ml-2">✓</span>
                      Comprehensive insurance
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300} duration={500}>
              <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300">
                    <Truck className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">
                    {t("home.landTransport")}
                  </CardTitle>
                  <CardDescription>{t("home.landTransportDesc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm hover:translate-x-1 transition-transform duration-200">
                      <span className="text-green-500 ml-2">✓</span>
                      Local & regional transport
                    </li>
                    <li className="flex items-center text-sm hover:translate-x-1 transition-transform duration-200">
                      <span className="text-green-500 ml-2">✓</span>
                      Modern diverse fleet
                    </li>
                    <li className="flex items-center text-sm hover:translate-x-1 transition-transform duration-200">
                      <span className="text-green-500 ml-2">✓</span>
                      Real-time tracking
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400} duration={500}>
              <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">
                    {t("home.customsClearance")}
                  </CardTitle>
                  <CardDescription>{t("home.customsClearanceDesc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm hover:translate-x-1 transition-transform duration-200">
                      <span className="text-green-500 ml-2">✓</span>
                      Fast & accurate clearance
                    </li>
                    <li className="flex items-center text-sm hover:translate-x-1 transition-transform duration-200">
                      <span className="text-green-500 ml-2">✓</span>
                      Full legal compliance
                    </li>
                    <li className="flex items-center text-sm hover:translate-x-1 transition-transform duration-200">
                      <span className="text-green-500 ml-2">✓</span>
                      Customs consultation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={500} duration={500}>
              <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">
                    Import & Export
                  </CardTitle>
                  <CardDescription>
                    Comprehensive import and export services with extensive global network
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm hover:translate-x-1 transition-transform duration-200">
                      <span className="text-green-500 ml-2">✓</span>
                      Extensive global network
                    </li>
                    <li className="flex items-center text-sm hover:translate-x-1 transition-transform duration-200">
                      <span className="text-green-500 ml-2">✓</span>
                      Supply chain management
                    </li>
                    <li className="flex items-center text-sm hover:translate-x-1 transition-transform duration-200">
                      <span className="text-green-500 ml-2">✓</span>
                      Trade consultation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={600} duration={500}>
              <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">
                    Security Solutions
                  </CardTitle>
                  <CardDescription>
                    Advanced security systems to protect cargo throughout the transport journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm hover:translate-x-1 transition-transform duration-200">
                      <span className="text-green-500 ml-2">✓</span>
                      Comprehensive insurance
                    </li>
                    <li className="flex items-center text-sm hover:translate-x-1 transition-transform duration-200">
                      <span className="text-green-500 ml-2">✓</span>
                      24/7 monitoring
                    </li>
                    <li className="flex items-center text-sm hover:translate-x-1 transition-transform duration-200">
                      <span className="text-green-500 ml-2">✓</span>
                      Security reports
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right" duration={1000}>
              <AnimatedSection animation="fade-up" delay={200} duration={600}>
                <Badge variant="outline" className="mb-4">
                  {t("home.whyChooseTitle")}
                </Badge>
              </AnimatedSection>
              <AnimatedSection animation="fade-right" delay={300} duration={800}>
                <h2 className="text-4xl font-bold mb-6">{t("home.whyChooseTitle")}</h2>
              </AnimatedSection>
              <div className="space-y-6">
                <AnimatedSection animation="fade-right" delay={500} duration={700}>
                  <div className="flex items-start space-x-4 rtl:space-x-reverse hover:translate-x-2 transition-transform duration-300">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-sm">🌍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{t("home.globalNetwork")}</h3>
                      <p className="text-gray-600">{t("home.globalNetworkDesc")}</p>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fade-right" delay={700} duration={700}>
                  <div className="flex items-start space-x-4 rtl:space-x-reverse hover:translate-x-2 transition-transform duration-300">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-sm">👥</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{t("home.expertTeam")}</h3>
                      <p className="text-gray-600">{t("home.expertTeamDesc")}</p>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fade-right" delay={900} duration={700}>
                  <div className="flex items-start space-x-4 rtl:space-x-reverse hover:translate-x-2 transition-transform duration-300">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-sm">🔧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{t("home.technology")}</h3>
                      <p className="text-gray-600">{t("home.technologyDesc")}</p>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fade-right" delay={1100} duration={700}>
                  <div className="flex items-start space-x-4 rtl:space-x-reverse hover:translate-x-2 transition-transform duration-300">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-sm">🛡️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{t("home.support")}</h3>
                      <p className="text-gray-600">{t("home.supportDesc")}</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-left" duration={1000} delay={300}>
              <div className="relative">
                <Image
                  src="/team-office.jpg"
                  alt="Professional logistics team working in modern office environment"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 hover:shadow-xl"
                />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-full animate-pulse delay-500"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-sky-200 rounded-full animate-bounce delay-1000"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection animation="fade-up" duration={800}>
        <section
          className="py-20 text-white relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1e40af 0%, #2563eb 100%)",
          }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-sky-300 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300 rounded-full animate-ping delay-500"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <AnimatedSection animation="fade-up" duration={800}>
              <h2 className="text-4xl font-bold mb-4 text-white">{t("home.ctaTitle")}</h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={300} duration={800}>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-50">{t("home.ctaSubtitle")}</p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={600} duration={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-lg px-8 hover:scale-105 transition-all duration-300 hover:shadow-lg group bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {t("common.getStarted")} {isRTL ? "←" : "→"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-transparent hover:bg-white/10 hover:scale-105 transition-all duration-300 border-white text-white"
                >
                  {t("common.contactUs")}
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  )
}
