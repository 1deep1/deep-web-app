import createIntlMiddleware from 'next-intl/middleware';
 
export default async function middleware(request) {
  const defaultLocale = request.headers.get('x-default-locale') || 'default';

  const handleI18nRouting = createIntlMiddleware({
    locales: ['en', 'ru'],
    defaultLocale,
    // localeDetection: true
  },);
  const response = handleI18nRouting(request);
 
  response.headers.set('x-default-locale', defaultLocale);
 
  return response;
}
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};