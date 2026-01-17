import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Header } from './collections/Header'
import { Footer } from './collections/Footer'
import { Subscribers } from './collections/Subscribers'
import { s3Storage } from '@payloadcms/storage-s3'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [Header, Footer],
  collections: [Users, Media, Pages, Subscribers],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: true, // slug твоей коллекции
      },
      bucket: 'media', // имя бакета, который ты создал в Supabase
      config: {
        endpoint: process.env.SUPABASE_S3_ENDPOINT!, // ВАЖНО: берется в настройках Supabase
        region: 'us-east-1', // Для Supabase можно писать любое, обычно us-east-1
        credentials: {
          accessKeyId: process.env.SUPABASE_ACCESS_KEY_ID!,
          secretAccessKey: process.env.SUPABASE_SECRET_ACCESS_KEY!,
        },
        forcePathStyle: true,
      },
    }),
  ],
})
