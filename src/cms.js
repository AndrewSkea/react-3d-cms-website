import { createClient } from "contentful";

const client = createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_PREVIEW_API,
    host: "preview.contentful.com"
});

export const getTechnologies = async () => {
    try {
        console.log("Getting Technologies");
        const entries = await client.getEntries({
            content_type: "technology",
            select: "fields"
        });

        var sanitizedEntries = entries.items.map((item) => {
            return {
                ...item.fields
            };
        });
        sanitizedEntries.sort((a, b) => (a.id > b.id) ? 1 : -1)
        return sanitizedEntries;
    } catch (error) {
        console.log(`Error fetching technologies ${error}`);
    }
};

export const getProjects = async () => {
    try {
        console.log("Getting Projects");
        const entries = await client.getEntries({
            content_type: "projects",
            select: "fields"
        });

        const sanitizedEntries = entries.items.map((item) => {
            return {
                ...item.fields
            };
        });
        sanitizedEntries.sort((a, b) => (a.id > b.id) ? 1 : -1)
        return sanitizedEntries;
    } catch (error) {
        console.log(`Error fetching projects ${error}`);
    }
};
