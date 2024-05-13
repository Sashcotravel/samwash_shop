import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ["uk", "en", "ru"],
    defaultLocale: "uk",
});

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
};