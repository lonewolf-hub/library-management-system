import { NextRequest, NextResponse } from 'next/server';
import BookModel from '@/models/bookModel';
import { Book } from '@/types/types';

declare module 'next/server' {
    interface NextRequest {
        locals: {
            isAdmin: boolean;
            // Add other properties as needed
        };
    }
}

export async function POST(request: NextRequest) {
    try {
        // Check if user is an admin
        const isAdmin = request.locals.isAdmin;

        if (!isAdmin) {
            return new NextResponse(null, { status: 403 });
        }

        // Ensure request body is not null
        if (!request.body) {
            return new NextResponse(null, { status: 400 });
        }

        // Convert ReadableStream to JSON
        const requestBody = await request.body.text();
        const {
            title,
            authors,
            ISBN,
            publisher,
            publicationDate,
            genre,
            language,
            description,
            coverImage,
            numberOfPages,
            tags,
        }: Book = JSON.parse(requestBody);

        // Create a new book
        const newBook: Book = {
            title,
            authors,
            ISBN,
            publisher,
            publicationDate,
            genre,
            language,
            description,
            coverImage,
            numberOfPages,
            tags,
        };

        // Save the book to the database
        const savedBook = await BookModel.create(newBook);

        // Send the response
        return new NextResponse.json({
            message: 'Book added successfully',
            data: savedBook,
        });
    } catch (error: any) {
        // Handle errors and send an appropriate response
        return new NextResponse.json({
            error: error.message
        }, { status: 500 });
    }
}
