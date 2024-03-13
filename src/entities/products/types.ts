export type Product = {
    id: number,
    attributes: {
        "title": string,
        "description": string,
        "price": number,
        "createdAt": string,
        "updatedAt": string,
        "publishedAt": string,
        "image": {
            "data": {
                "id": number,
                "attributes": {
                    "name": string,
                    "alternativeText": string,
                    "url": string,
                }
            }
        },
        "category": {
            "data": {
                "id": number,
                "attributes": {
                    "name": string,
                }
            }
        }
    }
}

export type Category = {
    id: number,
    attributes: {
        "name": string,
        "createdAt": string,
        "updatedAt": string,
        "publishedAt": string,
        "products": {
            "data": [
                {
                    "id": number,
                    "attributes": {
                        "title": string,
                        "description": string,
                        "price": number,
                        "createdAt": string,
                        "updatedAt": string,
                        "publishedAt": string
                        "image": {
                            "data": {
                                "id": number,
                                "attributes": {
                                    "name": string,
                                    "alternativeText": string,
                                    "url": string,
                                }
                            }
                        },
                    }
                },
            ]
        }
    }
}