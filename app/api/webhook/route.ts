import { NextRequest, NextResponse } from 'next/server';

/**
 * Handles Farcaster webhook events sent to the frame.
 * This endpoint processes events like frame_added, frame_removed,
 * notifications_enabled, and notifications_disabled.
 * 
 * @param request The incoming webhook request from Farcaster
 * @returns A JSON response with status message
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Received webhook event:', body);

    // Process different webhook event types
    if (body.event === 'frame_added') {
      console.log('Frame added event received with notification details:', body.notificationDetails);
    } else if (body.event === 'frame_removed') {
      console.log('Frame removed event received');
    } else if (body.event === 'notifications_enabled') {
      console.log('Notifications enabled event received:', body.notificationDetails);
    } else if (body.event === 'notifications_disabled') {
      console.log('Notifications disabled event received');
    }

    // Return a successful response
    return NextResponse.json({ status: 'success', message: 'Webhook processed' });
  } catch (error) {
    console.error('Error processing webhook:', error);
    
    // Return an error response
    return NextResponse.json(
      { status: 'error', message: 'Error processing webhook' },
      { status: 500 }
    );
  }
}

/**
 * Responds to OPTIONS requests for CORS preflight
 */
export function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
