import { NextRequest, NextResponse } from 'next/server'
import { ServiceModel } from '@/lib/database/models'

// GET /api/services - Get all services
export async function GET() {
  try {
    const services = await ServiceModel.getAll()
    return NextResponse.json(services)
  } catch (error) {
    console.error('Error fetching services:', error)
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    )
  }
}

// POST /api/services - Create a new service
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Creating service with data:', body)
    
    const service = await ServiceModel.create(body)
    console.log('Service created successfully:', service)
    
    return NextResponse.json(service, { status: 201 })
  } catch (error) {
    console.error('Error creating service:', error)
    
    // Provide more detailed error information
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const errorDetails = {
      error: 'Failed to create service',
      details: errorMessage,
      timestamp: new Date().toISOString()
    }
    
    return NextResponse.json(errorDetails, { status: 500 })
  }
}
