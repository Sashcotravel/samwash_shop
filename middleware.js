import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ["uk", "en", "ru"],
    defaultLocale: "uk",
    localeDetection: false,
});

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
};