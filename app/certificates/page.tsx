"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, Globe, Shield, CheckCircle } from "lucide-react"
import Image from "next/image"

interface Certificate {
  id: string
  name_en: string
  name_ar: string
  name_ro: string
  description_en: string
  description_ar: string
  description_ro: string
  image_url: string
  issued_date: string
  expiry_date: string
  created_at: string
  updated_at: string
}

export default function CertificatesPage() {
  const [certificates, setCertificates] = useState<Certificate[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadCertificates = async () => {
      try {
        const response = await fetch('/api/certificates')
        if (response.ok) {
          const data = await response.json()
          setCertificates(data)
        } else {
          console.error('Failed to load certificates')
          setError('Failed to load certificates')
        }
      } catch (error) {
        console.error('Error loading certificates:', error)
        setError('Error loading certificates')
      } finally {
        setIsLoading(false)
      }
    }

    loadCertificates()
  }, [])

  const isExpired = (expiryDate: string) => {
    return new Date(expiryDate) < new Date()
  }

  const isExpiringSoon = (expiryDate: string) => {
    const threeMonthsFromNow = new Date()
    threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3)
    return new Date(expiryDate) <= threeMonthsFromNow && new Date(expiryDate) > new Date()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading certificates...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Certificates</h2>
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
              <Award className="h-16 w-16 text-yellow-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Certifications
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              BLACK SEA STAR is committed to maintaining the highest standards of quality, 
              safety, and environmental responsibility through internationally recognized certifications.
            </p>
          </div>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {certificates.length === 0 ? (
          <div className="text-center py-16">
            <Award className="h-24 w-24 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Certificates Available</h3>
            <p className="text-gray-600">Certificates will be displayed here once they are added.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quality & Compliance Certifications
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our certifications demonstrate our commitment to excellence and compliance 
                with international standards in logistics and supply chain management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((certificate) => (
                <Card key={certificate.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-6 w-6 text-blue-600" />
                        <Badge 
                          variant={isExpired(certificate.expiry_date) ? "destructive" : 
                                  isExpiringSoon(certificate.expiry_date) ? "secondary" : "default"}
                          className="text-xs"
                        >
                          {isExpired(certificate.expiry_date) ? "Expired" : 
                           isExpiringSoon(certificate.expiry_date) ? "Expiring Soon" : "Valid"}
                        </Badge>
                      </div>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {certificate.name_en}
                    </CardTitle>
                    
                    <div className="space-y-1 text-sm text-gray-600">
                      <p className="font-medium">{certificate.name_ar}</p>
                      <p className="font-medium">{certificate.name_ro}</p>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Certificate Image */}
                    {certificate.image_url && (
                      <div className="relative h-48 w-full overflow-hidden rounded-lg bg-gray-100">
                        <Image
                          src={certificate.image_url}
                          alt={certificate.name_en}
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
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {certificate.description_en}
                    </p>

                    {/* Dates */}
                    <div className="space-y-2 pt-4 border-t">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                        <span className="font-medium">Issued:</span>
                        <span className="ml-2">{formatDate(certificate.issued_date)}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                        <span className="font-medium">Expires:</span>
                        <span className="ml-2">{formatDate(certificate.expiry_date)}</span>
                      </div>
                    </div>

                    {/* Status Indicator */}
                    <div className="flex items-center justify-center pt-2">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        isExpired(certificate.expiry_date) 
                          ? 'bg-red-100 text-red-800' 
                          : isExpiringSoon(certificate.expiry_date)
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {isExpired(certificate.expiry_date) ? (
                          <>
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                            Certificate Expired
                          </>
                        ) : isExpiringSoon(certificate.expiry_date) ? (
                          <>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                            Expires Soon
                          </>
                        ) : (
                          <>
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            Valid Certificate
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Summary Stats */}
            <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {certificates.length}
                  </div>
                  <div className="text-gray-600">Total Certifications</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {certificates.filter(c => !isExpired(c.expiry_date) && !isExpiringSoon(c.expiry_date)).length}
                  </div>
                  <div className="text-gray-600">Valid Certificates</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-600 mb-2">
                    {certificates.filter(c => isExpiringSoon(c.expiry_date)).length}
                  </div>
                  <div className="text-gray-600">Expiring Soon</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Trusted by International Standards
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our certifications ensure that we meet the highest international standards 
            for quality, safety, and environmental responsibility in all our operations.
          </p>
          <div className="flex justify-center space-x-4">
            <Globe className="h-8 w-8 text-yellow-300" />
            <Shield className="h-8 w-8 text-yellow-300" />
            <Award className="h-8 w-8 text-yellow-300" />
          </div>
        </div>
      </div>
    </div>
  )
}