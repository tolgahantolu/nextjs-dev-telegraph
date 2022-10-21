# Dev Telegraph 👨‍💻

![dev-telegraph](https://user-images.githubusercontent.com/68701178/197105204-8a894a2c-ddb0-4f7a-a067-f8a2ef123428.png)
Demo: https://dev-telegraph.vercel.app/

NextJS, GraphQL, Firebase ve Redux ile geliştirdiğim bir proje. Ayrıca Typescript'i de bu proje ile birlikte elimden geldiğince verimli bir şekilde kullanmaya çalıştım.

 ## Kullanılan Teknoloji ve Versiyonları
 #### Dependencies
 * react - `18.2.0`
 * next - `12.3.1` 
 * @reduxjs/toolkit - `^1.8.6`
 * react-redux - `^8.0.4`
 * graphql - `^16.6.0`
 * graphql-request - `^5.0.0`
 * firebase - `^9.12.1`
 * moment - `^2.29.4`
 #### Dev Dependencies
 * typescript - `4.8.4`
 * tailwindcss - `^3.1.8`
 

## Uygulamanın Yaptıkları
* Hygraph CMS üzerinden yazılmış query'ler ile anasayfa, kategori sayfaları için veri çekmek.
* Hygraph CMS üzerinden yazılmış query'ler ile post detaylarını çekmek.
* Kategori sayfalarında tarihe göre DESC sıralama yapmak.
* Firebase Auth ile kullanıcı login ve logout işlemlerini yapmak.

## Eklemeyi Hedeflediğim Özellikler
* Firebase ile register işlemi. 
* "Saved" sayısı en çok olan postları ana sayfada en üst sıralarda göstermek.
* "Upvoted" sayısı en yüksek olan postları "Most Upvoted" sayfasında listelemek.

<br/><br/>
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
