import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { event, path, metadata } = data;

    // Log de l'événement
    console.log(`[EVENT] ${new Date().toISOString()} | Action: ${event} | Page: ${path} | Data:`, metadata);

    // Ici on pourrait insérer dans MongoDB ou une autre base de données
    // await db.collection('events').insertOne({ ...data, timestamp: new Date() });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error tracking event:', error);
    return NextResponse.json({ success: false, error: 'Failed to track event' }, { status: 400 });
  }
}
