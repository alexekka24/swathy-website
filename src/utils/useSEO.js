import { useEffect } from "react";

/**
 * useSEO — injects dynamic meta tags into <head> for each page.
 * React 19 compatible (no external libraries).
 *
 * @param {Object} opts
 * @param {string} opts.title       — Page title (appended with site name)
 * @param {string} opts.description — Meta description
 * @param {string} [opts.ogImage]   — OG image URL
 * @param {string} [opts.url]       — Canonical URL for this page
 * @param {string} [opts.type]      — OG type (default: "website")
 */
const SITE_NAME = "Swathy Deepak";
const BASE_URL = "https://swathydeepak.com";
const DEFAULT_IMAGE = `${BASE_URL}/assets/images/og-image.jpg`;

function setMeta(name, content, attr = "name") {
    if (!content) return;
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
    }
    el.setAttribute("content", content);
}

function setCanonical(url) {
    let el = document.querySelector('link[rel="canonical"]');
    if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "canonical");
        document.head.appendChild(el);
    }
    el.setAttribute("href", url);
}

export function useSEO({ title, description, ogImage, url, type = "website" }) {
    useEffect(() => {
        const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Director of Photography`;
        const fullUrl = url ? `${BASE_URL}${url}` : BASE_URL;
        const image = ogImage || DEFAULT_IMAGE;

        // Document title
        document.title = fullTitle;

        // Primary meta
        setMeta("description", description);

        // Open Graph
        setMeta("og:title", fullTitle, "property");
        setMeta("og:description", description, "property");
        setMeta("og:image", image, "property");
        setMeta("og:url", fullUrl, "property");
        setMeta("og:type", type, "property");

        // Twitter Card
        setMeta("twitter:title", fullTitle);
        setMeta("twitter:description", description);
        setMeta("twitter:image", image);
        setMeta("twitter:url", fullUrl);

        // Canonical
        setCanonical(fullUrl);
    }, [title, description, ogImage, url, type]);
}
