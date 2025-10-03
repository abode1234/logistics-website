"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Ship, Plane, Truck, Shield, Globe, Warehouse, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

interface Service {
  id: string
  name_en: string
  name_ar: string
  name_ro: string
  description_en: string
  description_ar: string
  description_ro: string
  icon: string
  image_url?: string
  created_at: string
  updated_at: string
}

const serviceIcons = {
  Ship: <Ship className="h-8 w-8 text-blue-600" />,
  Plane: <Plane className="h-8 w-8 text-blue-600" />,
  Truck: <Truck className="h-8 w-8 text-blue-600" />,
  Shield: <Shield className="h-8 w-8 text-blue-600" />,
  Globe: <Globe className="h-8 w-8 text-blue-600" />,
  Warehouse: <Warehouse className="h-8 w-8 text-blue-600" />,
  Package: <Package className="h-8 w-8 text-blue-600" />,
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await fetch('/api/services')
        if (response.ok) {
          const data = await response.json()
          setServices(data)
        } else {
          console.error('Failed to load services')
          setError('Failed to load services')
        }
      } catch (error) {
        console.error('Error loading services:', error)
        setError('Error loading services')
      } finally {
        setIsLoading(false)
      }
    }

    loadServices()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading services...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Services</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Package className="h-16 w-16 text-yellow-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              BLACK SEA STAR provides comprehensive logistics solutions tailored to meet 
              your business needs with the highest standards of quality and reliability.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {services.length === 0 ? (
          <div className="text-center py-16">
            <Package className="h-24 w-24 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Services Available</h3>
            <p className="text-gray-600">Services will be displayed here once they are added.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Logistics Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From sea freight to air cargo, we provide end-to-end logistics services 
                that ensure your cargo reaches its destination safely and on time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-200 shadow-xl bg-white overflow-hidden">
                  <CardHeader className="pb-4 bg-gray-50 border-b">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        {serviceIcons[service.icon as keyof typeof serviceIcons] || <Package className="h-8 w-8 text-blue-600" />}
                        <Badge variant="secondary" className="text-xs bg-green-100 text-green-800 border-green-200">
                          Available
                        </Badge>
                      </div>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.name_en}
                    </CardTitle>
                    
                    <div className="space-y-1 text-sm text-gray-700">
                      <p className="font-medium">{service.name_ar}</p>
                      <p className="font-medium">{service.name_ro}</p>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4 bg-white p-6">
                    {/* Service Image */}
                    {service.image_url && (
                      <div className="relative h-48 w-full overflow-hidden rounded-lg bg-gray-100 border-2 border-gray-200">
                        <Image
                          src={service.image_url}
                          alt={service.name_en}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                          }}
                        />
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-gray-800 text-sm leading-relaxed font-medium">
                      {service.description_en}
                    </p>

                    {/* Service Features */}
                    <div className="space-y-2 pt-4 border-t border-gray-200">
                      <div className="flex items-center text-sm text-gray-700 font-medium">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        <span>Professional Service</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700 font-medium">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        <span>24/7 Support</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700 font-medium">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        <span>Global Network</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 group font-medium shadow-md hover:shadow-lg">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Summary Stats */}
            <div className="mt-16 bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {services.length}
                  </div>
                  <div className="text-gray-700 font-medium">Total Services</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-700 font-medium">Countries Served</div>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">
                    500+
                  </div>
                  <div className="text-gray-700 font-medium">Happy Clients</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    15+
                  </div>
                  <div className="text-gray-700 font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Contact us today to discuss your logistics needs and get a customized 
            solution that fits your business requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
              Get Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors shadow-lg hover:shadow-xl">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}