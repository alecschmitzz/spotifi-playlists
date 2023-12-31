
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Song
 * 
 */
export type Song = $Result.DefaultSelection<Prisma.$SongPayload>
/**
 * Model Playlist
 * 
 */
export type Playlist = $Result.DefaultSelection<Prisma.$PlaylistPayload>
/**
 * Model SongPlaylist
 * 
 */
export type SongPlaylist = $Result.DefaultSelection<Prisma.$SongPlaylistPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Songs
 * const songs = await prisma.song.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Songs
   * const songs = await prisma.song.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.song`: Exposes CRUD operations for the **Song** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Songs
    * const songs = await prisma.song.findMany()
    * ```
    */
  get song(): Prisma.SongDelegate<ExtArgs>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **Playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.PlaylistDelegate<ExtArgs>;

  /**
   * `prisma.songPlaylist`: Exposes CRUD operations for the **SongPlaylist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SongPlaylists
    * const songPlaylists = await prisma.songPlaylist.findMany()
    * ```
    */
  get songPlaylist(): Prisma.SongPlaylistDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Song: 'Song',
    Playlist: 'Playlist',
    SongPlaylist: 'SongPlaylist'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'song' | 'playlist' | 'songPlaylist'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Song: {
        payload: Prisma.$SongPayload<ExtArgs>
        fields: Prisma.SongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SongFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SongFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findFirst: {
            args: Prisma.SongFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SongFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findMany: {
            args: Prisma.SongFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          create: {
            args: Prisma.SongCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          createMany: {
            args: Prisma.SongCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SongDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          update: {
            args: Prisma.SongUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          deleteMany: {
            args: Prisma.SongDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SongUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SongUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          aggregate: {
            args: Prisma.SongAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSong>
          }
          groupBy: {
            args: Prisma.SongGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SongGroupByOutputType>[]
          }
          count: {
            args: Prisma.SongCountArgs<ExtArgs>,
            result: $Utils.Optional<SongCountAggregateOutputType> | number
          }
        }
      }
      Playlist: {
        payload: Prisma.$PlaylistPayload<ExtArgs>
        fields: Prisma.PlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findFirst: {
            args: Prisma.PlaylistFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findMany: {
            args: Prisma.PlaylistFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          create: {
            args: Prisma.PlaylistCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          createMany: {
            args: Prisma.PlaylistCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PlaylistDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          update: {
            args: Prisma.PlaylistUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlaylistUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.PlaylistGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistCountArgs<ExtArgs>,
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      SongPlaylist: {
        payload: Prisma.$SongPlaylistPayload<ExtArgs>
        fields: Prisma.SongPlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SongPlaylistFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SongPlaylistFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPlaylistPayload>
          }
          findFirst: {
            args: Prisma.SongPlaylistFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SongPlaylistFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPlaylistPayload>
          }
          findMany: {
            args: Prisma.SongPlaylistFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPlaylistPayload>[]
          }
          create: {
            args: Prisma.SongPlaylistCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPlaylistPayload>
          }
          createMany: {
            args: Prisma.SongPlaylistCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SongPlaylistDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPlaylistPayload>
          }
          update: {
            args: Prisma.SongPlaylistUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPlaylistPayload>
          }
          deleteMany: {
            args: Prisma.SongPlaylistDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SongPlaylistUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SongPlaylistUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPlaylistPayload>
          }
          aggregate: {
            args: Prisma.SongPlaylistAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSongPlaylist>
          }
          groupBy: {
            args: Prisma.SongPlaylistGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SongPlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.SongPlaylistCountArgs<ExtArgs>,
            result: $Utils.Optional<SongPlaylistCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SongCountOutputType
   */

  export type SongCountOutputType = {
    SongPlaylist: number
    playlists: number
  }

  export type SongCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SongPlaylist?: boolean | SongCountOutputTypeCountSongPlaylistArgs
    playlists?: boolean | SongCountOutputTypeCountPlaylistsArgs
  }

  // Custom InputTypes

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCountOutputType
     */
    select?: SongCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountSongPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongPlaylistWhereInput
  }


  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
  }



  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    SongPlaylist: number
    songs: number
  }

  export type PlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SongPlaylist?: boolean | PlaylistCountOutputTypeCountSongPlaylistArgs
    songs?: boolean | PlaylistCountOutputTypeCountSongsArgs
  }

  // Custom InputTypes

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountSongPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongPlaylistWhereInput
  }


  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Song
   */

  export type AggregateSong = {
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  export type SongAvgAggregateOutputType = {
    duration: number | null
  }

  export type SongSumAggregateOutputType = {
    duration: number | null
  }

  export type SongMinAggregateOutputType = {
    id: string | null
    title: string | null
    artist: string | null
    duration: number | null
    genre: string | null
    released: boolean | null
    album: string | null
    hash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SongMaxAggregateOutputType = {
    id: string | null
    title: string | null
    artist: string | null
    duration: number | null
    genre: string | null
    released: boolean | null
    album: string | null
    hash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SongCountAggregateOutputType = {
    id: number
    title: number
    artist: number
    duration: number
    genre: number
    released: number
    album: number
    hash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SongAvgAggregateInputType = {
    duration?: true
  }

  export type SongSumAggregateInputType = {
    duration?: true
  }

  export type SongMinAggregateInputType = {
    id?: true
    title?: true
    artist?: true
    duration?: true
    genre?: true
    released?: true
    album?: true
    hash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SongMaxAggregateInputType = {
    id?: true
    title?: true
    artist?: true
    duration?: true
    genre?: true
    released?: true
    album?: true
    hash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SongCountAggregateInputType = {
    id?: true
    title?: true
    artist?: true
    duration?: true
    genre?: true
    released?: true
    album?: true
    hash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Song to aggregate.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Songs
    **/
    _count?: true | SongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongMaxAggregateInputType
  }

  export type GetSongAggregateType<T extends SongAggregateArgs> = {
        [P in keyof T & keyof AggregateSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSong[P]>
      : GetScalarType<T[P], AggregateSong[P]>
  }




  export type SongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
    orderBy?: SongOrderByWithAggregationInput | SongOrderByWithAggregationInput[]
    by: SongScalarFieldEnum[] | SongScalarFieldEnum
    having?: SongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongCountAggregateInputType | true
    _avg?: SongAvgAggregateInputType
    _sum?: SongSumAggregateInputType
    _min?: SongMinAggregateInputType
    _max?: SongMaxAggregateInputType
  }

  export type SongGroupByOutputType = {
    id: string
    title: string
    artist: string
    duration: number
    genre: string
    released: boolean
    album: string
    hash: string
    createdAt: Date
    updatedAt: Date
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  type GetSongGroupByPayload<T extends SongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongGroupByOutputType[P]>
            : GetScalarType<T[P], SongGroupByOutputType[P]>
        }
      >
    >


  export type SongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    artist?: boolean
    duration?: boolean
    genre?: boolean
    released?: boolean
    album?: boolean
    hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    SongPlaylist?: boolean | Song$SongPlaylistArgs<ExtArgs>
    playlists?: boolean | Song$playlistsArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type SongSelectScalar = {
    id?: boolean
    title?: boolean
    artist?: boolean
    duration?: boolean
    genre?: boolean
    released?: boolean
    album?: boolean
    hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SongPlaylist?: boolean | Song$SongPlaylistArgs<ExtArgs>
    playlists?: boolean | Song$playlistsArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Song"
    objects: {
      SongPlaylist: Prisma.$SongPlaylistPayload<ExtArgs>[]
      playlists: Prisma.$PlaylistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      artist: string
      duration: number
      genre: string
      released: boolean
      album: string
      hash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["song"]>
    composites: {}
  }


  type SongGetPayload<S extends boolean | null | undefined | SongDefaultArgs> = $Result.GetResult<Prisma.$SongPayload, S>

  type SongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SongFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SongCountAggregateInputType | true
    }

  export interface SongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Song'], meta: { name: 'Song' } }
    /**
     * Find zero or one Song that matches the filter.
     * @param {SongFindUniqueArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SongFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SongFindUniqueArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Song that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SongFindUniqueOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SongFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SongFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Song that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SongFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SongFindFirstArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Song that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SongFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SongFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Songs
     * const songs = await prisma.song.findMany()
     * 
     * // Get first 10 Songs
     * const songs = await prisma.song.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songWithIdOnly = await prisma.song.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SongFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Song.
     * @param {SongCreateArgs} args - Arguments to create a Song.
     * @example
     * // Create one Song
     * const Song = await prisma.song.create({
     *   data: {
     *     // ... data to create a Song
     *   }
     * })
     * 
    **/
    create<T extends SongCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SongCreateArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Songs.
     *     @param {SongCreateManyArgs} args - Arguments to create many Songs.
     *     @example
     *     // Create many Songs
     *     const song = await prisma.song.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SongCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Song.
     * @param {SongDeleteArgs} args - Arguments to delete one Song.
     * @example
     * // Delete one Song
     * const Song = await prisma.song.delete({
     *   where: {
     *     // ... filter to delete one Song
     *   }
     * })
     * 
    **/
    delete<T extends SongDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SongDeleteArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Song.
     * @param {SongUpdateArgs} args - Arguments to update one Song.
     * @example
     * // Update one Song
     * const song = await prisma.song.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SongUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SongUpdateArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Songs.
     * @param {SongDeleteManyArgs} args - Arguments to filter Songs to delete.
     * @example
     * // Delete a few Songs
     * const { count } = await prisma.song.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SongDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SongUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SongUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Song.
     * @param {SongUpsertArgs} args - Arguments to update or create a Song.
     * @example
     * // Update or create a Song
     * const song = await prisma.song.upsert({
     *   create: {
     *     // ... data to create a Song
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Song we want to update
     *   }
     * })
    **/
    upsert<T extends SongUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SongUpsertArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongCountArgs} args - Arguments to filter Songs to count.
     * @example
     * // Count the number of Songs
     * const count = await prisma.song.count({
     *   where: {
     *     // ... the filter for the Songs we want to count
     *   }
     * })
    **/
    count<T extends SongCountArgs>(
      args?: Subset<T, SongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SongAggregateArgs>(args: Subset<T, SongAggregateArgs>): Prisma.PrismaPromise<GetSongAggregateType<T>>

    /**
     * Group by Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongGroupByArgs['orderBy'] }
        : { orderBy?: SongGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Song model
   */
  readonly fields: SongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Song.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    SongPlaylist<T extends Song$SongPlaylistArgs<ExtArgs> = {}>(args?: Subset<T, Song$SongPlaylistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPlaylistPayload<ExtArgs>, T, 'findMany'> | Null>;

    playlists<T extends Song$playlistsArgs<ExtArgs> = {}>(args?: Subset<T, Song$playlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Song model
   */ 
  interface SongFieldRefs {
    readonly id: FieldRef<"Song", 'String'>
    readonly title: FieldRef<"Song", 'String'>
    readonly artist: FieldRef<"Song", 'String'>
    readonly duration: FieldRef<"Song", 'Int'>
    readonly genre: FieldRef<"Song", 'String'>
    readonly released: FieldRef<"Song", 'Boolean'>
    readonly album: FieldRef<"Song", 'String'>
    readonly hash: FieldRef<"Song", 'String'>
    readonly createdAt: FieldRef<"Song", 'DateTime'>
    readonly updatedAt: FieldRef<"Song", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Song findUnique
   */
  export type SongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }


  /**
   * Song findUniqueOrThrow
   */
  export type SongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }


  /**
   * Song findFirst
   */
  export type SongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Song findFirstOrThrow
   */
  export type SongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Song findMany
   */
  export type SongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Songs to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Song create
   */
  export type SongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to create a Song.
     */
    data: XOR<SongCreateInput, SongUncheckedCreateInput>
  }


  /**
   * Song createMany
   */
  export type SongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Songs.
     */
    data: SongCreateManyInput | SongCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Song update
   */
  export type SongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to update a Song.
     */
    data: XOR<SongUpdateInput, SongUncheckedUpdateInput>
    /**
     * Choose, which Song to update.
     */
    where: SongWhereUniqueInput
  }


  /**
   * Song updateMany
   */
  export type SongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Songs.
     */
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyInput>
    /**
     * Filter which Songs to update
     */
    where?: SongWhereInput
  }


  /**
   * Song upsert
   */
  export type SongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The filter to search for the Song to update in case it exists.
     */
    where: SongWhereUniqueInput
    /**
     * In case the Song found by the `where` argument doesn't exist, create a new Song with this data.
     */
    create: XOR<SongCreateInput, SongUncheckedCreateInput>
    /**
     * In case the Song was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongUpdateInput, SongUncheckedUpdateInput>
  }


  /**
   * Song delete
   */
  export type SongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter which Song to delete.
     */
    where: SongWhereUniqueInput
  }


  /**
   * Song deleteMany
   */
  export type SongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Songs to delete
     */
    where?: SongWhereInput
  }


  /**
   * Song.SongPlaylist
   */
  export type Song$SongPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongPlaylist
     */
    select?: SongPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongPlaylistInclude<ExtArgs> | null
    where?: SongPlaylistWhereInput
    orderBy?: SongPlaylistOrderByWithRelationInput | SongPlaylistOrderByWithRelationInput[]
    cursor?: SongPlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongPlaylistScalarFieldEnum | SongPlaylistScalarFieldEnum[]
  }


  /**
   * Song.playlists
   */
  export type Song$playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }


  /**
   * Song without action
   */
  export type SongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
  }



  /**
   * Model Playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    hash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    hash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    title: number
    description: number
    hash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlaylistMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    hash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    hash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    hash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlist to aggregate.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type PlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithAggregationInput | PlaylistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: PlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    id: string
    title: string
    description: string
    hash: string
    createdAt: Date
    updatedAt: Date
    _count: PlaylistCountAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    SongPlaylist?: boolean | Playlist$SongPlaylistArgs<ExtArgs>
    songs?: boolean | Playlist$songsArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SongPlaylist?: boolean | Playlist$SongPlaylistArgs<ExtArgs>
    songs?: boolean | Playlist$songsArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlist"
    objects: {
      SongPlaylist: Prisma.$SongPlaylistPayload<ExtArgs>[]
      songs: Prisma.$SongPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      hash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }


  type PlaylistGetPayload<S extends boolean | null | undefined | PlaylistDefaultArgs> = $Result.GetResult<Prisma.$PlaylistPayload, S>

  type PlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlaylistFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface PlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Playlist'], meta: { name: 'Playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {PlaylistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlaylistFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistFindUniqueArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Playlist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlaylistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlaylistFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistFindFirstArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlaylistFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Playlist.
     * @param {PlaylistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
    **/
    create<T extends PlaylistCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistCreateArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Playlists.
     *     @param {PlaylistCreateManyArgs} args - Arguments to create many Playlists.
     *     @example
     *     // Create many Playlists
     *     const playlist = await prisma.playlist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlaylistCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Playlist.
     * @param {PlaylistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
    **/
    delete<T extends PlaylistDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistDeleteArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Playlist.
     * @param {PlaylistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlaylistUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistUpdateArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlaylistDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlaylistUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Playlist.
     * @param {PlaylistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
    **/
    upsert<T extends PlaylistUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistUpsertArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends PlaylistCountArgs>(
      args?: Subset<T, PlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Playlist model
   */
  readonly fields: PlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    SongPlaylist<T extends Playlist$SongPlaylistArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$SongPlaylistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPlaylistPayload<ExtArgs>, T, 'findMany'> | Null>;

    songs<T extends Playlist$songsArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Playlist model
   */ 
  interface PlaylistFieldRefs {
    readonly id: FieldRef<"Playlist", 'String'>
    readonly title: FieldRef<"Playlist", 'String'>
    readonly description: FieldRef<"Playlist", 'String'>
    readonly hash: FieldRef<"Playlist", 'String'>
    readonly createdAt: FieldRef<"Playlist", 'DateTime'>
    readonly updatedAt: FieldRef<"Playlist", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Playlist findUnique
   */
  export type PlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }


  /**
   * Playlist findUniqueOrThrow
   */
  export type PlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }


  /**
   * Playlist findFirst
   */
  export type PlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }


  /**
   * Playlist findFirstOrThrow
   */
  export type PlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }


  /**
   * Playlist findMany
   */
  export type PlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }


  /**
   * Playlist create
   */
  export type PlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a Playlist.
     */
    data: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
  }


  /**
   * Playlist createMany
   */
  export type PlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Playlist update
   */
  export type PlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a Playlist.
     */
    data: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
    /**
     * Choose, which Playlist to update.
     */
    where: PlaylistWhereUniqueInput
  }


  /**
   * Playlist updateMany
   */
  export type PlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
  }


  /**
   * Playlist upsert
   */
  export type PlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the Playlist to update in case it exists.
     */
    where: PlaylistWhereUniqueInput
    /**
     * In case the Playlist found by the `where` argument doesn't exist, create a new Playlist with this data.
     */
    create: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
    /**
     * In case the Playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
  }


  /**
   * Playlist delete
   */
  export type PlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter which Playlist to delete.
     */
    where: PlaylistWhereUniqueInput
  }


  /**
   * Playlist deleteMany
   */
  export type PlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistWhereInput
  }


  /**
   * Playlist.SongPlaylist
   */
  export type Playlist$SongPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongPlaylist
     */
    select?: SongPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongPlaylistInclude<ExtArgs> | null
    where?: SongPlaylistWhereInput
    orderBy?: SongPlaylistOrderByWithRelationInput | SongPlaylistOrderByWithRelationInput[]
    cursor?: SongPlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongPlaylistScalarFieldEnum | SongPlaylistScalarFieldEnum[]
  }


  /**
   * Playlist.songs
   */
  export type Playlist$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Playlist without action
   */
  export type PlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
  }



  /**
   * Model SongPlaylist
   */

  export type AggregateSongPlaylist = {
    _count: SongPlaylistCountAggregateOutputType | null
    _min: SongPlaylistMinAggregateOutputType | null
    _max: SongPlaylistMaxAggregateOutputType | null
  }

  export type SongPlaylistMinAggregateOutputType = {
    songId: string | null
    playlistId: string | null
    assignedAt: Date | null
  }

  export type SongPlaylistMaxAggregateOutputType = {
    songId: string | null
    playlistId: string | null
    assignedAt: Date | null
  }

  export type SongPlaylistCountAggregateOutputType = {
    songId: number
    playlistId: number
    assignedAt: number
    _all: number
  }


  export type SongPlaylistMinAggregateInputType = {
    songId?: true
    playlistId?: true
    assignedAt?: true
  }

  export type SongPlaylistMaxAggregateInputType = {
    songId?: true
    playlistId?: true
    assignedAt?: true
  }

  export type SongPlaylistCountAggregateInputType = {
    songId?: true
    playlistId?: true
    assignedAt?: true
    _all?: true
  }

  export type SongPlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SongPlaylist to aggregate.
     */
    where?: SongPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongPlaylists to fetch.
     */
    orderBy?: SongPlaylistOrderByWithRelationInput | SongPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SongPlaylists
    **/
    _count?: true | SongPlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongPlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongPlaylistMaxAggregateInputType
  }

  export type GetSongPlaylistAggregateType<T extends SongPlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregateSongPlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSongPlaylist[P]>
      : GetScalarType<T[P], AggregateSongPlaylist[P]>
  }




  export type SongPlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongPlaylistWhereInput
    orderBy?: SongPlaylistOrderByWithAggregationInput | SongPlaylistOrderByWithAggregationInput[]
    by: SongPlaylistScalarFieldEnum[] | SongPlaylistScalarFieldEnum
    having?: SongPlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongPlaylistCountAggregateInputType | true
    _min?: SongPlaylistMinAggregateInputType
    _max?: SongPlaylistMaxAggregateInputType
  }

  export type SongPlaylistGroupByOutputType = {
    songId: string
    playlistId: string
    assignedAt: Date
    _count: SongPlaylistCountAggregateOutputType | null
    _min: SongPlaylistMinAggregateOutputType | null
    _max: SongPlaylistMaxAggregateOutputType | null
  }

  type GetSongPlaylistGroupByPayload<T extends SongPlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongPlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongPlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongPlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], SongPlaylistGroupByOutputType[P]>
        }
      >
    >


  export type SongPlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    songId?: boolean
    playlistId?: boolean
    assignedAt?: boolean
    song?: boolean | SongDefaultArgs<ExtArgs>
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songPlaylist"]>

  export type SongPlaylistSelectScalar = {
    songId?: boolean
    playlistId?: boolean
    assignedAt?: boolean
  }

  export type SongPlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | SongDefaultArgs<ExtArgs>
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }


  export type $SongPlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SongPlaylist"
    objects: {
      song: Prisma.$SongPayload<ExtArgs>
      playlist: Prisma.$PlaylistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      songId: string
      playlistId: string
      assignedAt: Date
    }, ExtArgs["result"]["songPlaylist"]>
    composites: {}
  }


  type SongPlaylistGetPayload<S extends boolean | null | undefined | SongPlaylistDefaultArgs> = $Result.GetResult<Prisma.$SongPlaylistPayload, S>

  type SongPlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SongPlaylistFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SongPlaylistCountAggregateInputType | true
    }

  export interface SongPlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SongPlaylist'], meta: { name: 'SongPlaylist' } }
    /**
     * Find zero or one SongPlaylist that matches the filter.
     * @param {SongPlaylistFindUniqueArgs} args - Arguments to find a SongPlaylist
     * @example
     * // Get one SongPlaylist
     * const songPlaylist = await prisma.songPlaylist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SongPlaylistFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SongPlaylistFindUniqueArgs<ExtArgs>>
    ): Prisma__SongPlaylistClient<$Result.GetResult<Prisma.$SongPlaylistPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SongPlaylist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SongPlaylistFindUniqueOrThrowArgs} args - Arguments to find a SongPlaylist
     * @example
     * // Get one SongPlaylist
     * const songPlaylist = await prisma.songPlaylist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SongPlaylistFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SongPlaylistFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SongPlaylistClient<$Result.GetResult<Prisma.$SongPlaylistPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SongPlaylist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongPlaylistFindFirstArgs} args - Arguments to find a SongPlaylist
     * @example
     * // Get one SongPlaylist
     * const songPlaylist = await prisma.songPlaylist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SongPlaylistFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SongPlaylistFindFirstArgs<ExtArgs>>
    ): Prisma__SongPlaylistClient<$Result.GetResult<Prisma.$SongPlaylistPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SongPlaylist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongPlaylistFindFirstOrThrowArgs} args - Arguments to find a SongPlaylist
     * @example
     * // Get one SongPlaylist
     * const songPlaylist = await prisma.songPlaylist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SongPlaylistFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SongPlaylistFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SongPlaylistClient<$Result.GetResult<Prisma.$SongPlaylistPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SongPlaylists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongPlaylistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SongPlaylists
     * const songPlaylists = await prisma.songPlaylist.findMany()
     * 
     * // Get first 10 SongPlaylists
     * const songPlaylists = await prisma.songPlaylist.findMany({ take: 10 })
     * 
     * // Only select the `songId`
     * const songPlaylistWithSongIdOnly = await prisma.songPlaylist.findMany({ select: { songId: true } })
     * 
    **/
    findMany<T extends SongPlaylistFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongPlaylistFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPlaylistPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SongPlaylist.
     * @param {SongPlaylistCreateArgs} args - Arguments to create a SongPlaylist.
     * @example
     * // Create one SongPlaylist
     * const SongPlaylist = await prisma.songPlaylist.create({
     *   data: {
     *     // ... data to create a SongPlaylist
     *   }
     * })
     * 
    **/
    create<T extends SongPlaylistCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SongPlaylistCreateArgs<ExtArgs>>
    ): Prisma__SongPlaylistClient<$Result.GetResult<Prisma.$SongPlaylistPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SongPlaylists.
     *     @param {SongPlaylistCreateManyArgs} args - Arguments to create many SongPlaylists.
     *     @example
     *     // Create many SongPlaylists
     *     const songPlaylist = await prisma.songPlaylist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SongPlaylistCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongPlaylistCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SongPlaylist.
     * @param {SongPlaylistDeleteArgs} args - Arguments to delete one SongPlaylist.
     * @example
     * // Delete one SongPlaylist
     * const SongPlaylist = await prisma.songPlaylist.delete({
     *   where: {
     *     // ... filter to delete one SongPlaylist
     *   }
     * })
     * 
    **/
    delete<T extends SongPlaylistDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SongPlaylistDeleteArgs<ExtArgs>>
    ): Prisma__SongPlaylistClient<$Result.GetResult<Prisma.$SongPlaylistPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SongPlaylist.
     * @param {SongPlaylistUpdateArgs} args - Arguments to update one SongPlaylist.
     * @example
     * // Update one SongPlaylist
     * const songPlaylist = await prisma.songPlaylist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SongPlaylistUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SongPlaylistUpdateArgs<ExtArgs>>
    ): Prisma__SongPlaylistClient<$Result.GetResult<Prisma.$SongPlaylistPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SongPlaylists.
     * @param {SongPlaylistDeleteManyArgs} args - Arguments to filter SongPlaylists to delete.
     * @example
     * // Delete a few SongPlaylists
     * const { count } = await prisma.songPlaylist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SongPlaylistDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongPlaylistDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SongPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongPlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SongPlaylists
     * const songPlaylist = await prisma.songPlaylist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SongPlaylistUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SongPlaylistUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SongPlaylist.
     * @param {SongPlaylistUpsertArgs} args - Arguments to update or create a SongPlaylist.
     * @example
     * // Update or create a SongPlaylist
     * const songPlaylist = await prisma.songPlaylist.upsert({
     *   create: {
     *     // ... data to create a SongPlaylist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SongPlaylist we want to update
     *   }
     * })
    **/
    upsert<T extends SongPlaylistUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SongPlaylistUpsertArgs<ExtArgs>>
    ): Prisma__SongPlaylistClient<$Result.GetResult<Prisma.$SongPlaylistPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SongPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongPlaylistCountArgs} args - Arguments to filter SongPlaylists to count.
     * @example
     * // Count the number of SongPlaylists
     * const count = await prisma.songPlaylist.count({
     *   where: {
     *     // ... the filter for the SongPlaylists we want to count
     *   }
     * })
    **/
    count<T extends SongPlaylistCountArgs>(
      args?: Subset<T, SongPlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongPlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SongPlaylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongPlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SongPlaylistAggregateArgs>(args: Subset<T, SongPlaylistAggregateArgs>): Prisma.PrismaPromise<GetSongPlaylistAggregateType<T>>

    /**
     * Group by SongPlaylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongPlaylistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SongPlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongPlaylistGroupByArgs['orderBy'] }
        : { orderBy?: SongPlaylistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SongPlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SongPlaylist model
   */
  readonly fields: SongPlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SongPlaylist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SongPlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    song<T extends SongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongDefaultArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    playlist<T extends PlaylistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaylistDefaultArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SongPlaylist model
   */ 
  interface SongPlaylistFieldRefs {
    readonly songId: FieldRef<"SongPlaylist", 'String'>
    readonly playlistId: FieldRef<"SongPlaylist", 'String'>
    readonly assignedAt: FieldRef<"SongPlaylist", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * SongPlaylist findUnique
   */
  export type SongPlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongPlaylist
     */
    select?: SongPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which SongPlaylist to fetch.
     */
    where: SongPlaylistWhereUniqueInput
  }


  /**
   * SongPlaylist findUniqueOrThrow
   */
  export type SongPlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongPlaylist
     */
    select?: SongPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which SongPlaylist to fetch.
     */
    where: SongPlaylistWhereUniqueInput
  }


  /**
   * SongPlaylist findFirst
   */
  export type SongPlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongPlaylist
     */
    select?: SongPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which SongPlaylist to fetch.
     */
    where?: SongPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongPlaylists to fetch.
     */
    orderBy?: SongPlaylistOrderByWithRelationInput | SongPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SongPlaylists.
     */
    cursor?: SongPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongPlaylists.
     */
    distinct?: SongPlaylistScalarFieldEnum | SongPlaylistScalarFieldEnum[]
  }


  /**
   * SongPlaylist findFirstOrThrow
   */
  export type SongPlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongPlaylist
     */
    select?: SongPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which SongPlaylist to fetch.
     */
    where?: SongPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongPlaylists to fetch.
     */
    orderBy?: SongPlaylistOrderByWithRelationInput | SongPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SongPlaylists.
     */
    cursor?: SongPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongPlaylists.
     */
    distinct?: SongPlaylistScalarFieldEnum | SongPlaylistScalarFieldEnum[]
  }


  /**
   * SongPlaylist findMany
   */
  export type SongPlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongPlaylist
     */
    select?: SongPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which SongPlaylists to fetch.
     */
    where?: SongPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongPlaylists to fetch.
     */
    orderBy?: SongPlaylistOrderByWithRelationInput | SongPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SongPlaylists.
     */
    cursor?: SongPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongPlaylists.
     */
    skip?: number
    distinct?: SongPlaylistScalarFieldEnum | SongPlaylistScalarFieldEnum[]
  }


  /**
   * SongPlaylist create
   */
  export type SongPlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongPlaylist
     */
    select?: SongPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongPlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a SongPlaylist.
     */
    data: XOR<SongPlaylistCreateInput, SongPlaylistUncheckedCreateInput>
  }


  /**
   * SongPlaylist createMany
   */
  export type SongPlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SongPlaylists.
     */
    data: SongPlaylistCreateManyInput | SongPlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SongPlaylist update
   */
  export type SongPlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongPlaylist
     */
    select?: SongPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongPlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a SongPlaylist.
     */
    data: XOR<SongPlaylistUpdateInput, SongPlaylistUncheckedUpdateInput>
    /**
     * Choose, which SongPlaylist to update.
     */
    where: SongPlaylistWhereUniqueInput
  }


  /**
   * SongPlaylist updateMany
   */
  export type SongPlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SongPlaylists.
     */
    data: XOR<SongPlaylistUpdateManyMutationInput, SongPlaylistUncheckedUpdateManyInput>
    /**
     * Filter which SongPlaylists to update
     */
    where?: SongPlaylistWhereInput
  }


  /**
   * SongPlaylist upsert
   */
  export type SongPlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongPlaylist
     */
    select?: SongPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongPlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the SongPlaylist to update in case it exists.
     */
    where: SongPlaylistWhereUniqueInput
    /**
     * In case the SongPlaylist found by the `where` argument doesn't exist, create a new SongPlaylist with this data.
     */
    create: XOR<SongPlaylistCreateInput, SongPlaylistUncheckedCreateInput>
    /**
     * In case the SongPlaylist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongPlaylistUpdateInput, SongPlaylistUncheckedUpdateInput>
  }


  /**
   * SongPlaylist delete
   */
  export type SongPlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongPlaylist
     */
    select?: SongPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongPlaylistInclude<ExtArgs> | null
    /**
     * Filter which SongPlaylist to delete.
     */
    where: SongPlaylistWhereUniqueInput
  }


  /**
   * SongPlaylist deleteMany
   */
  export type SongPlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SongPlaylists to delete
     */
    where?: SongPlaylistWhereInput
  }


  /**
   * SongPlaylist without action
   */
  export type SongPlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongPlaylist
     */
    select?: SongPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongPlaylistInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SongScalarFieldEnum: {
    id: 'id',
    title: 'title',
    artist: 'artist',
    duration: 'duration',
    genre: 'genre',
    released: 'released',
    album: 'album',
    hash: 'hash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SongScalarFieldEnum = (typeof SongScalarFieldEnum)[keyof typeof SongScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    hash: 'hash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const SongPlaylistScalarFieldEnum: {
    songId: 'songId',
    playlistId: 'playlistId',
    assignedAt: 'assignedAt'
  };

  export type SongPlaylistScalarFieldEnum = (typeof SongPlaylistScalarFieldEnum)[keyof typeof SongPlaylistScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type SongWhereInput = {
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    id?: StringFilter<"Song"> | string
    title?: StringFilter<"Song"> | string
    artist?: StringFilter<"Song"> | string
    duration?: IntFilter<"Song"> | number
    genre?: StringFilter<"Song"> | string
    released?: BoolFilter<"Song"> | boolean
    album?: StringFilter<"Song"> | string
    hash?: StringFilter<"Song"> | string
    createdAt?: DateTimeFilter<"Song"> | Date | string
    updatedAt?: DateTimeFilter<"Song"> | Date | string
    SongPlaylist?: SongPlaylistListRelationFilter
    playlists?: PlaylistListRelationFilter
  }

  export type SongOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    duration?: SortOrder
    genre?: SortOrder
    released?: SortOrder
    album?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    SongPlaylist?: SongPlaylistOrderByRelationAggregateInput
    playlists?: PlaylistOrderByRelationAggregateInput
  }

  export type SongWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    title?: StringFilter<"Song"> | string
    artist?: StringFilter<"Song"> | string
    duration?: IntFilter<"Song"> | number
    genre?: StringFilter<"Song"> | string
    released?: BoolFilter<"Song"> | boolean
    album?: StringFilter<"Song"> | string
    hash?: StringFilter<"Song"> | string
    createdAt?: DateTimeFilter<"Song"> | Date | string
    updatedAt?: DateTimeFilter<"Song"> | Date | string
    SongPlaylist?: SongPlaylistListRelationFilter
    playlists?: PlaylistListRelationFilter
  }, "id">

  export type SongOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    duration?: SortOrder
    genre?: SortOrder
    released?: SortOrder
    album?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SongCountOrderByAggregateInput
    _avg?: SongAvgOrderByAggregateInput
    _max?: SongMaxOrderByAggregateInput
    _min?: SongMinOrderByAggregateInput
    _sum?: SongSumOrderByAggregateInput
  }

  export type SongScalarWhereWithAggregatesInput = {
    AND?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    OR?: SongScalarWhereWithAggregatesInput[]
    NOT?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Song"> | string
    title?: StringWithAggregatesFilter<"Song"> | string
    artist?: StringWithAggregatesFilter<"Song"> | string
    duration?: IntWithAggregatesFilter<"Song"> | number
    genre?: StringWithAggregatesFilter<"Song"> | string
    released?: BoolWithAggregatesFilter<"Song"> | boolean
    album?: StringWithAggregatesFilter<"Song"> | string
    hash?: StringWithAggregatesFilter<"Song"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Song"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Song"> | Date | string
  }

  export type PlaylistWhereInput = {
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    id?: StringFilter<"Playlist"> | string
    title?: StringFilter<"Playlist"> | string
    description?: StringFilter<"Playlist"> | string
    hash?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    SongPlaylist?: SongPlaylistListRelationFilter
    songs?: SongListRelationFilter
  }

  export type PlaylistOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    SongPlaylist?: SongPlaylistOrderByRelationAggregateInput
    songs?: SongOrderByRelationAggregateInput
  }

  export type PlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    title?: StringFilter<"Playlist"> | string
    description?: StringFilter<"Playlist"> | string
    hash?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    SongPlaylist?: SongPlaylistListRelationFilter
    songs?: SongListRelationFilter
  }, "id">

  export type PlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlaylistCountOrderByAggregateInput
    _max?: PlaylistMaxOrderByAggregateInput
    _min?: PlaylistMinOrderByAggregateInput
  }

  export type PlaylistScalarWhereWithAggregatesInput = {
    AND?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    OR?: PlaylistScalarWhereWithAggregatesInput[]
    NOT?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Playlist"> | string
    title?: StringWithAggregatesFilter<"Playlist"> | string
    description?: StringWithAggregatesFilter<"Playlist"> | string
    hash?: StringWithAggregatesFilter<"Playlist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
  }

  export type SongPlaylistWhereInput = {
    AND?: SongPlaylistWhereInput | SongPlaylistWhereInput[]
    OR?: SongPlaylistWhereInput[]
    NOT?: SongPlaylistWhereInput | SongPlaylistWhereInput[]
    songId?: StringFilter<"SongPlaylist"> | string
    playlistId?: StringFilter<"SongPlaylist"> | string
    assignedAt?: DateTimeFilter<"SongPlaylist"> | Date | string
    song?: XOR<SongRelationFilter, SongWhereInput>
    playlist?: XOR<PlaylistRelationFilter, PlaylistWhereInput>
  }

  export type SongPlaylistOrderByWithRelationInput = {
    songId?: SortOrder
    playlistId?: SortOrder
    assignedAt?: SortOrder
    song?: SongOrderByWithRelationInput
    playlist?: PlaylistOrderByWithRelationInput
  }

  export type SongPlaylistWhereUniqueInput = Prisma.AtLeast<{
    songId_playlistId?: SongPlaylistSongIdPlaylistIdCompoundUniqueInput
    AND?: SongPlaylistWhereInput | SongPlaylistWhereInput[]
    OR?: SongPlaylistWhereInput[]
    NOT?: SongPlaylistWhereInput | SongPlaylistWhereInput[]
    songId?: StringFilter<"SongPlaylist"> | string
    playlistId?: StringFilter<"SongPlaylist"> | string
    assignedAt?: DateTimeFilter<"SongPlaylist"> | Date | string
    song?: XOR<SongRelationFilter, SongWhereInput>
    playlist?: XOR<PlaylistRelationFilter, PlaylistWhereInput>
  }, "songId_playlistId">

  export type SongPlaylistOrderByWithAggregationInput = {
    songId?: SortOrder
    playlistId?: SortOrder
    assignedAt?: SortOrder
    _count?: SongPlaylistCountOrderByAggregateInput
    _max?: SongPlaylistMaxOrderByAggregateInput
    _min?: SongPlaylistMinOrderByAggregateInput
  }

  export type SongPlaylistScalarWhereWithAggregatesInput = {
    AND?: SongPlaylistScalarWhereWithAggregatesInput | SongPlaylistScalarWhereWithAggregatesInput[]
    OR?: SongPlaylistScalarWhereWithAggregatesInput[]
    NOT?: SongPlaylistScalarWhereWithAggregatesInput | SongPlaylistScalarWhereWithAggregatesInput[]
    songId?: StringWithAggregatesFilter<"SongPlaylist"> | string
    playlistId?: StringWithAggregatesFilter<"SongPlaylist"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"SongPlaylist"> | Date | string
  }

  export type SongCreateInput = {
    id?: string
    title: string
    artist: string
    duration: number
    genre: string
    released: boolean
    album: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    SongPlaylist?: SongPlaylistCreateNestedManyWithoutSongInput
    playlists?: PlaylistCreateNestedManyWithoutSongsInput
  }

  export type SongUncheckedCreateInput = {
    id?: string
    title: string
    artist: string
    duration: number
    genre: string
    released: boolean
    album: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    SongPlaylist?: SongPlaylistUncheckedCreateNestedManyWithoutSongInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutSongsInput
  }

  export type SongUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    released?: BoolFieldUpdateOperationsInput | boolean
    album?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SongPlaylist?: SongPlaylistUpdateManyWithoutSongNestedInput
    playlists?: PlaylistUpdateManyWithoutSongsNestedInput
  }

  export type SongUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    released?: BoolFieldUpdateOperationsInput | boolean
    album?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SongPlaylist?: SongPlaylistUncheckedUpdateManyWithoutSongNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutSongsNestedInput
  }

  export type SongCreateManyInput = {
    id?: string
    title: string
    artist: string
    duration: number
    genre: string
    released: boolean
    album: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SongUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    released?: BoolFieldUpdateOperationsInput | boolean
    album?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    released?: BoolFieldUpdateOperationsInput | boolean
    album?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistCreateInput = {
    id?: string
    title: string
    description: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    SongPlaylist?: SongPlaylistCreateNestedManyWithoutPlaylistInput
    songs?: SongCreateNestedManyWithoutPlaylistsInput
  }

  export type PlaylistUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    SongPlaylist?: SongPlaylistUncheckedCreateNestedManyWithoutPlaylistInput
    songs?: SongUncheckedCreateNestedManyWithoutPlaylistsInput
  }

  export type PlaylistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SongPlaylist?: SongPlaylistUpdateManyWithoutPlaylistNestedInput
    songs?: SongUpdateManyWithoutPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SongPlaylist?: SongPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput
    songs?: SongUncheckedUpdateManyWithoutPlaylistsNestedInput
  }

  export type PlaylistCreateManyInput = {
    id?: string
    title: string
    description: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongPlaylistCreateInput = {
    assignedAt?: Date | string
    song: SongCreateNestedOneWithoutSongPlaylistInput
    playlist: PlaylistCreateNestedOneWithoutSongPlaylistInput
  }

  export type SongPlaylistUncheckedCreateInput = {
    songId: string
    playlistId: string
    assignedAt?: Date | string
  }

  export type SongPlaylistUpdateInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    song?: SongUpdateOneRequiredWithoutSongPlaylistNestedInput
    playlist?: PlaylistUpdateOneRequiredWithoutSongPlaylistNestedInput
  }

  export type SongPlaylistUncheckedUpdateInput = {
    songId?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongPlaylistCreateManyInput = {
    songId: string
    playlistId: string
    assignedAt?: Date | string
  }

  export type SongPlaylistUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongPlaylistUncheckedUpdateManyInput = {
    songId?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SongPlaylistListRelationFilter = {
    every?: SongPlaylistWhereInput
    some?: SongPlaylistWhereInput
    none?: SongPlaylistWhereInput
  }

  export type PlaylistListRelationFilter = {
    every?: PlaylistWhereInput
    some?: PlaylistWhereInput
    none?: PlaylistWhereInput
  }

  export type SongPlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SongCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    duration?: SortOrder
    genre?: SortOrder
    released?: SortOrder
    album?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SongAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type SongMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    duration?: SortOrder
    genre?: SortOrder
    released?: SortOrder
    album?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SongMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    duration?: SortOrder
    genre?: SortOrder
    released?: SortOrder
    album?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SongSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SongListRelationFilter = {
    every?: SongWhereInput
    some?: SongWhereInput
    none?: SongWhereInput
  }

  export type SongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SongRelationFilter = {
    is?: SongWhereInput
    isNot?: SongWhereInput
  }

  export type PlaylistRelationFilter = {
    is?: PlaylistWhereInput
    isNot?: PlaylistWhereInput
  }

  export type SongPlaylistSongIdPlaylistIdCompoundUniqueInput = {
    songId: string
    playlistId: string
  }

  export type SongPlaylistCountOrderByAggregateInput = {
    songId?: SortOrder
    playlistId?: SortOrder
    assignedAt?: SortOrder
  }

  export type SongPlaylistMaxOrderByAggregateInput = {
    songId?: SortOrder
    playlistId?: SortOrder
    assignedAt?: SortOrder
  }

  export type SongPlaylistMinOrderByAggregateInput = {
    songId?: SortOrder
    playlistId?: SortOrder
    assignedAt?: SortOrder
  }

  export type SongPlaylistCreateNestedManyWithoutSongInput = {
    create?: XOR<SongPlaylistCreateWithoutSongInput, SongPlaylistUncheckedCreateWithoutSongInput> | SongPlaylistCreateWithoutSongInput[] | SongPlaylistUncheckedCreateWithoutSongInput[]
    connectOrCreate?: SongPlaylistCreateOrConnectWithoutSongInput | SongPlaylistCreateOrConnectWithoutSongInput[]
    createMany?: SongPlaylistCreateManySongInputEnvelope
    connect?: SongPlaylistWhereUniqueInput | SongPlaylistWhereUniqueInput[]
  }

  export type PlaylistCreateNestedManyWithoutSongsInput = {
    create?: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput> | PlaylistCreateWithoutSongsInput[] | PlaylistUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutSongsInput | PlaylistCreateOrConnectWithoutSongsInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type SongPlaylistUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<SongPlaylistCreateWithoutSongInput, SongPlaylistUncheckedCreateWithoutSongInput> | SongPlaylistCreateWithoutSongInput[] | SongPlaylistUncheckedCreateWithoutSongInput[]
    connectOrCreate?: SongPlaylistCreateOrConnectWithoutSongInput | SongPlaylistCreateOrConnectWithoutSongInput[]
    createMany?: SongPlaylistCreateManySongInputEnvelope
    connect?: SongPlaylistWhereUniqueInput | SongPlaylistWhereUniqueInput[]
  }

  export type PlaylistUncheckedCreateNestedManyWithoutSongsInput = {
    create?: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput> | PlaylistCreateWithoutSongsInput[] | PlaylistUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutSongsInput | PlaylistCreateOrConnectWithoutSongsInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SongPlaylistUpdateManyWithoutSongNestedInput = {
    create?: XOR<SongPlaylistCreateWithoutSongInput, SongPlaylistUncheckedCreateWithoutSongInput> | SongPlaylistCreateWithoutSongInput[] | SongPlaylistUncheckedCreateWithoutSongInput[]
    connectOrCreate?: SongPlaylistCreateOrConnectWithoutSongInput | SongPlaylistCreateOrConnectWithoutSongInput[]
    upsert?: SongPlaylistUpsertWithWhereUniqueWithoutSongInput | SongPlaylistUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: SongPlaylistCreateManySongInputEnvelope
    set?: SongPlaylistWhereUniqueInput | SongPlaylistWhereUniqueInput[]
    disconnect?: SongPlaylistWhereUniqueInput | SongPlaylistWhereUniqueInput[]
    delete?: SongPlaylistWhereUniqueInput | SongPlaylistWhereUniqueInput[]
    connect?: SongPlaylistWhereUniqueInput | SongPlaylistWhereUniqueInput[]
    update?: SongPlaylistUpdateWithWhereUniqueWithoutSongInput | SongPlaylistUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: SongPlaylistUpdateManyWithWhereWithoutSongInput | SongPlaylistUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: SongPlaylistScalarWhereInput | SongPlaylistScalarWhereInput[]
  }

  export type PlaylistUpdateManyWithoutSongsNestedInput = {
    create?: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput> | PlaylistCreateWithoutSongsInput[] | PlaylistUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutSongsInput | PlaylistCreateOrConnectWithoutSongsInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutSongsInput | PlaylistUpsertWithWhereUniqueWithoutSongsInput[]
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutSongsInput | PlaylistUpdateWithWhereUniqueWithoutSongsInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutSongsInput | PlaylistUpdateManyWithWhereWithoutSongsInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type SongPlaylistUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<SongPlaylistCreateWithoutSongInput, SongPlaylistUncheckedCreateWithoutSongInput> | SongPlaylistCreateWithoutSongInput[] | SongPlaylistUncheckedCreateWithoutSongInput[]
    connectOrCreate?: SongPlaylistCreateOrConnectWithoutSongInput | SongPlaylistCreateOrConnectWithoutSongInput[]
    upsert?: SongPlaylistUpsertWithWhereUniqueWithoutSongInput | SongPlaylistUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: SongPlaylistCreateManySongInputEnvelope
    set?: SongPlaylistWhereUniqueInput | SongPlaylistWhereUniqueInput[]
    disconnect?: SongPlaylistWhereUniqueInput | SongPlaylistWhereUniqueInput[]
    delete?: SongPlaylistWhereUniqueInput | SongPlaylistWhereUniqueInput[]
    connect?: SongPlaylistWhereUniqueInput | SongPlaylistWhereUniqueInput[]
    update?: SongPlaylistUpdateWithWhereUniqueWithoutSongInput | SongPlaylistUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: SongPlaylistUpdateManyWithWhereWithoutSongInput | SongPlaylistUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: SongPlaylistScalarWhereInput | SongPlaylistScalarWhereInput[]
  }

  export type PlaylistUncheckedUpdateManyWithoutSongsNestedInput = {
    create?: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput> | PlaylistCreateWithoutSongsInput[] | PlaylistUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutSongsInput | PlaylistCreateOrConnectWithoutSongsInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutSongsInput | PlaylistUpsertWithWhereUniqueWithoutSongsInput[]
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutSongsInput | PlaylistUpdateWithWhereUniqueWithoutSongsInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutSongsInput | PlaylistUpdateManyWithWhereWithoutSongsInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type SongPlaylistCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<SongPlaylistCreateWithoutPlaylistInput, SongPlaylistUncheckedCreateWithoutPlaylistInput> | SongPlaylistCreateWithoutPlaylistInput[] | SongPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: SongPlaylistCreateOrConnectWithoutPlaylistInput | SongPlaylistCreateOrConnectWithoutPlaylistInput[]
    createMany?: SongPlaylistCreateManyPlaylistInputEnvelope
    connect?: SongPlaylistWhereUniqueInput | SongPlaylistWhereUniqueInput[]
  }

  export type SongCreateNestedManyWithoutPlaylistsInput = {
    create?: XOR<SongCreateWithoutPlaylistsInput, SongUncheckedCreateWithoutPlaylistsInput> | SongCreateWithoutPlaylistsInput[] | SongUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistsInput | SongCreateOrConnectWithoutPlaylistsInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type SongPlaylistUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<SongPlaylistCreateWithoutPlaylistInput, SongPlaylistUncheckedCreateWithoutPlaylistInput> | SongPlaylistCreateWithoutPlaylistInput[] | SongPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: SongPlaylistCreateOrConnectWithoutPlaylistInput | SongPlaylistCreateOrConnectWithoutPlaylistInput[]
    createMany?: SongPlaylistCreateManyPlaylistInputEnvelope
    connect?: SongPlaylistWhereUniqueInput | SongPlaylistWhereUniqueInput[]
  }

  export type SongUncheckedCreateNestedManyWithoutPlaylistsInput = {
    create?: XOR<SongCreateWithoutPlaylistsInput, SongUncheckedCreateWithoutPlaylistsInput> | SongCreateWithoutPlaylistsInput[] | SongUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistsInput | SongCreateOrConnectWithoutPlaylistsInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type SongPlaylistUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<SongPlaylistCreateWithoutPlaylistInput, SongPlaylistUncheckedCreateWithoutPlaylistInput> | SongPlaylistCreateWithoutPlaylistInput[] | SongPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: SongPlaylistCreateOrConnectWithoutPlaylistInput | SongPlaylistCreateOrConnectWithoutPlaylistInput[]
    upsert?: SongPlaylistUpsertWithWhereUniqueWithoutPlaylistInput | SongPlaylistUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: SongPlaylistCreateManyPlaylistInputEnvelope
    set?: SongPlaylistWhereUniqueInput | SongPlaylistWhereUniqueInput[]
    disconnect?: SongPlaylistWhereUniqueInput | SongPlaylistWhereUniqueInput[]
    delete?: SongPlaylistWhereUniqueInput | SongPlaylistWhereUniqueInput[]
    connect?: SongPlaylistWhereUniqueInput | SongPlaylistWhereUniqueInput[]
    update?: SongPlaylistUpdateWithWhereUniqueWithoutPlaylistInput | SongPlaylistUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: SongPlaylistUpdateManyWithWhereWithoutPlaylistInput | SongPlaylistUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: SongPlaylistScalarWhereInput | SongPlaylistScalarWhereInput[]
  }

  export type SongUpdateManyWithoutPlaylistsNestedInput = {
    create?: XOR<SongCreateWithoutPlaylistsInput, SongUncheckedCreateWithoutPlaylistsInput> | SongCreateWithoutPlaylistsInput[] | SongUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistsInput | SongCreateOrConnectWithoutPlaylistsInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutPlaylistsInput | SongUpsertWithWhereUniqueWithoutPlaylistsInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutPlaylistsInput | SongUpdateWithWhereUniqueWithoutPlaylistsInput[]
    updateMany?: SongUpdateManyWithWhereWithoutPlaylistsInput | SongUpdateManyWithWhereWithoutPlaylistsInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type SongPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<SongPlaylistCreateWithoutPlaylistInput, SongPlaylistUncheckedCreateWithoutPlaylistInput> | SongPlaylistCreateWithoutPlaylistInput[] | SongPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: SongPlaylistCreateOrConnectWithoutPlaylistInput | SongPlaylistCreateOrConnectWithoutPlaylistInput[]
    upsert?: SongPlaylistUpsertWithWhereUniqueWithoutPlaylistInput | SongPlaylistUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: SongPlaylistCreateManyPlaylistInputEnvelope
    set?: SongPlaylistWhereUniqueInput | SongPlaylistWhereUniqueInput[]
    disconnect?: SongPlaylistWhereUniqueInput | SongPlaylistWhereUniqueInput[]
    delete?: SongPlaylistWhereUniqueInput | SongPlaylistWhereUniqueInput[]
    connect?: SongPlaylistWhereUniqueInput | SongPlaylistWhereUniqueInput[]
    update?: SongPlaylistUpdateWithWhereUniqueWithoutPlaylistInput | SongPlaylistUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: SongPlaylistUpdateManyWithWhereWithoutPlaylistInput | SongPlaylistUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: SongPlaylistScalarWhereInput | SongPlaylistScalarWhereInput[]
  }

  export type SongUncheckedUpdateManyWithoutPlaylistsNestedInput = {
    create?: XOR<SongCreateWithoutPlaylistsInput, SongUncheckedCreateWithoutPlaylistsInput> | SongCreateWithoutPlaylistsInput[] | SongUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistsInput | SongCreateOrConnectWithoutPlaylistsInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutPlaylistsInput | SongUpsertWithWhereUniqueWithoutPlaylistsInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutPlaylistsInput | SongUpdateWithWhereUniqueWithoutPlaylistsInput[]
    updateMany?: SongUpdateManyWithWhereWithoutPlaylistsInput | SongUpdateManyWithWhereWithoutPlaylistsInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type SongCreateNestedOneWithoutSongPlaylistInput = {
    create?: XOR<SongCreateWithoutSongPlaylistInput, SongUncheckedCreateWithoutSongPlaylistInput>
    connectOrCreate?: SongCreateOrConnectWithoutSongPlaylistInput
    connect?: SongWhereUniqueInput
  }

  export type PlaylistCreateNestedOneWithoutSongPlaylistInput = {
    create?: XOR<PlaylistCreateWithoutSongPlaylistInput, PlaylistUncheckedCreateWithoutSongPlaylistInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutSongPlaylistInput
    connect?: PlaylistWhereUniqueInput
  }

  export type SongUpdateOneRequiredWithoutSongPlaylistNestedInput = {
    create?: XOR<SongCreateWithoutSongPlaylistInput, SongUncheckedCreateWithoutSongPlaylistInput>
    connectOrCreate?: SongCreateOrConnectWithoutSongPlaylistInput
    upsert?: SongUpsertWithoutSongPlaylistInput
    connect?: SongWhereUniqueInput
    update?: XOR<XOR<SongUpdateToOneWithWhereWithoutSongPlaylistInput, SongUpdateWithoutSongPlaylistInput>, SongUncheckedUpdateWithoutSongPlaylistInput>
  }

  export type PlaylistUpdateOneRequiredWithoutSongPlaylistNestedInput = {
    create?: XOR<PlaylistCreateWithoutSongPlaylistInput, PlaylistUncheckedCreateWithoutSongPlaylistInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutSongPlaylistInput
    upsert?: PlaylistUpsertWithoutSongPlaylistInput
    connect?: PlaylistWhereUniqueInput
    update?: XOR<XOR<PlaylistUpdateToOneWithWhereWithoutSongPlaylistInput, PlaylistUpdateWithoutSongPlaylistInput>, PlaylistUncheckedUpdateWithoutSongPlaylistInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SongPlaylistCreateWithoutSongInput = {
    assignedAt?: Date | string
    playlist: PlaylistCreateNestedOneWithoutSongPlaylistInput
  }

  export type SongPlaylistUncheckedCreateWithoutSongInput = {
    playlistId: string
    assignedAt?: Date | string
  }

  export type SongPlaylistCreateOrConnectWithoutSongInput = {
    where: SongPlaylistWhereUniqueInput
    create: XOR<SongPlaylistCreateWithoutSongInput, SongPlaylistUncheckedCreateWithoutSongInput>
  }

  export type SongPlaylistCreateManySongInputEnvelope = {
    data: SongPlaylistCreateManySongInput | SongPlaylistCreateManySongInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistCreateWithoutSongsInput = {
    id?: string
    title: string
    description: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    SongPlaylist?: SongPlaylistCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutSongsInput = {
    id?: string
    title: string
    description: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    SongPlaylist?: SongPlaylistUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistCreateOrConnectWithoutSongsInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput>
  }

  export type SongPlaylistUpsertWithWhereUniqueWithoutSongInput = {
    where: SongPlaylistWhereUniqueInput
    update: XOR<SongPlaylistUpdateWithoutSongInput, SongPlaylistUncheckedUpdateWithoutSongInput>
    create: XOR<SongPlaylistCreateWithoutSongInput, SongPlaylistUncheckedCreateWithoutSongInput>
  }

  export type SongPlaylistUpdateWithWhereUniqueWithoutSongInput = {
    where: SongPlaylistWhereUniqueInput
    data: XOR<SongPlaylistUpdateWithoutSongInput, SongPlaylistUncheckedUpdateWithoutSongInput>
  }

  export type SongPlaylistUpdateManyWithWhereWithoutSongInput = {
    where: SongPlaylistScalarWhereInput
    data: XOR<SongPlaylistUpdateManyMutationInput, SongPlaylistUncheckedUpdateManyWithoutSongInput>
  }

  export type SongPlaylistScalarWhereInput = {
    AND?: SongPlaylistScalarWhereInput | SongPlaylistScalarWhereInput[]
    OR?: SongPlaylistScalarWhereInput[]
    NOT?: SongPlaylistScalarWhereInput | SongPlaylistScalarWhereInput[]
    songId?: StringFilter<"SongPlaylist"> | string
    playlistId?: StringFilter<"SongPlaylist"> | string
    assignedAt?: DateTimeFilter<"SongPlaylist"> | Date | string
  }

  export type PlaylistUpsertWithWhereUniqueWithoutSongsInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutSongsInput, PlaylistUncheckedUpdateWithoutSongsInput>
    create: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutSongsInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutSongsInput, PlaylistUncheckedUpdateWithoutSongsInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutSongsInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutSongsInput>
  }

  export type PlaylistScalarWhereInput = {
    AND?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    OR?: PlaylistScalarWhereInput[]
    NOT?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    id?: StringFilter<"Playlist"> | string
    title?: StringFilter<"Playlist"> | string
    description?: StringFilter<"Playlist"> | string
    hash?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
  }

  export type SongPlaylistCreateWithoutPlaylistInput = {
    assignedAt?: Date | string
    song: SongCreateNestedOneWithoutSongPlaylistInput
  }

  export type SongPlaylistUncheckedCreateWithoutPlaylistInput = {
    songId: string
    assignedAt?: Date | string
  }

  export type SongPlaylistCreateOrConnectWithoutPlaylistInput = {
    where: SongPlaylistWhereUniqueInput
    create: XOR<SongPlaylistCreateWithoutPlaylistInput, SongPlaylistUncheckedCreateWithoutPlaylistInput>
  }

  export type SongPlaylistCreateManyPlaylistInputEnvelope = {
    data: SongPlaylistCreateManyPlaylistInput | SongPlaylistCreateManyPlaylistInput[]
    skipDuplicates?: boolean
  }

  export type SongCreateWithoutPlaylistsInput = {
    id?: string
    title: string
    artist: string
    duration: number
    genre: string
    released: boolean
    album: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    SongPlaylist?: SongPlaylistCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutPlaylistsInput = {
    id?: string
    title: string
    artist: string
    duration: number
    genre: string
    released: boolean
    album: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    SongPlaylist?: SongPlaylistUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutPlaylistsInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutPlaylistsInput, SongUncheckedCreateWithoutPlaylistsInput>
  }

  export type SongPlaylistUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: SongPlaylistWhereUniqueInput
    update: XOR<SongPlaylistUpdateWithoutPlaylistInput, SongPlaylistUncheckedUpdateWithoutPlaylistInput>
    create: XOR<SongPlaylistCreateWithoutPlaylistInput, SongPlaylistUncheckedCreateWithoutPlaylistInput>
  }

  export type SongPlaylistUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: SongPlaylistWhereUniqueInput
    data: XOR<SongPlaylistUpdateWithoutPlaylistInput, SongPlaylistUncheckedUpdateWithoutPlaylistInput>
  }

  export type SongPlaylistUpdateManyWithWhereWithoutPlaylistInput = {
    where: SongPlaylistScalarWhereInput
    data: XOR<SongPlaylistUpdateManyMutationInput, SongPlaylistUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type SongUpsertWithWhereUniqueWithoutPlaylistsInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutPlaylistsInput, SongUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<SongCreateWithoutPlaylistsInput, SongUncheckedCreateWithoutPlaylistsInput>
  }

  export type SongUpdateWithWhereUniqueWithoutPlaylistsInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutPlaylistsInput, SongUncheckedUpdateWithoutPlaylistsInput>
  }

  export type SongUpdateManyWithWhereWithoutPlaylistsInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutPlaylistsInput>
  }

  export type SongScalarWhereInput = {
    AND?: SongScalarWhereInput | SongScalarWhereInput[]
    OR?: SongScalarWhereInput[]
    NOT?: SongScalarWhereInput | SongScalarWhereInput[]
    id?: StringFilter<"Song"> | string
    title?: StringFilter<"Song"> | string
    artist?: StringFilter<"Song"> | string
    duration?: IntFilter<"Song"> | number
    genre?: StringFilter<"Song"> | string
    released?: BoolFilter<"Song"> | boolean
    album?: StringFilter<"Song"> | string
    hash?: StringFilter<"Song"> | string
    createdAt?: DateTimeFilter<"Song"> | Date | string
    updatedAt?: DateTimeFilter<"Song"> | Date | string
  }

  export type SongCreateWithoutSongPlaylistInput = {
    id?: string
    title: string
    artist: string
    duration: number
    genre: string
    released: boolean
    album: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistCreateNestedManyWithoutSongsInput
  }

  export type SongUncheckedCreateWithoutSongPlaylistInput = {
    id?: string
    title: string
    artist: string
    duration: number
    genre: string
    released: boolean
    album: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistUncheckedCreateNestedManyWithoutSongsInput
  }

  export type SongCreateOrConnectWithoutSongPlaylistInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutSongPlaylistInput, SongUncheckedCreateWithoutSongPlaylistInput>
  }

  export type PlaylistCreateWithoutSongPlaylistInput = {
    id?: string
    title: string
    description: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutPlaylistsInput
  }

  export type PlaylistUncheckedCreateWithoutSongPlaylistInput = {
    id?: string
    title: string
    description: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutPlaylistsInput
  }

  export type PlaylistCreateOrConnectWithoutSongPlaylistInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutSongPlaylistInput, PlaylistUncheckedCreateWithoutSongPlaylistInput>
  }

  export type SongUpsertWithoutSongPlaylistInput = {
    update: XOR<SongUpdateWithoutSongPlaylistInput, SongUncheckedUpdateWithoutSongPlaylistInput>
    create: XOR<SongCreateWithoutSongPlaylistInput, SongUncheckedCreateWithoutSongPlaylistInput>
    where?: SongWhereInput
  }

  export type SongUpdateToOneWithWhereWithoutSongPlaylistInput = {
    where?: SongWhereInput
    data: XOR<SongUpdateWithoutSongPlaylistInput, SongUncheckedUpdateWithoutSongPlaylistInput>
  }

  export type SongUpdateWithoutSongPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    released?: BoolFieldUpdateOperationsInput | boolean
    album?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUpdateManyWithoutSongsNestedInput
  }

  export type SongUncheckedUpdateWithoutSongPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    released?: BoolFieldUpdateOperationsInput | boolean
    album?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUncheckedUpdateManyWithoutSongsNestedInput
  }

  export type PlaylistUpsertWithoutSongPlaylistInput = {
    update: XOR<PlaylistUpdateWithoutSongPlaylistInput, PlaylistUncheckedUpdateWithoutSongPlaylistInput>
    create: XOR<PlaylistCreateWithoutSongPlaylistInput, PlaylistUncheckedCreateWithoutSongPlaylistInput>
    where?: PlaylistWhereInput
  }

  export type PlaylistUpdateToOneWithWhereWithoutSongPlaylistInput = {
    where?: PlaylistWhereInput
    data: XOR<PlaylistUpdateWithoutSongPlaylistInput, PlaylistUncheckedUpdateWithoutSongPlaylistInput>
  }

  export type PlaylistUpdateWithoutSongPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutSongPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutPlaylistsNestedInput
  }

  export type SongPlaylistCreateManySongInput = {
    playlistId: string
    assignedAt?: Date | string
  }

  export type SongPlaylistUpdateWithoutSongInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneRequiredWithoutSongPlaylistNestedInput
  }

  export type SongPlaylistUncheckedUpdateWithoutSongInput = {
    playlistId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongPlaylistUncheckedUpdateManyWithoutSongInput = {
    playlistId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SongPlaylist?: SongPlaylistUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SongPlaylist?: SongPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongPlaylistCreateManyPlaylistInput = {
    songId: string
    assignedAt?: Date | string
  }

  export type SongPlaylistUpdateWithoutPlaylistInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    song?: SongUpdateOneRequiredWithoutSongPlaylistNestedInput
  }

  export type SongPlaylistUncheckedUpdateWithoutPlaylistInput = {
    songId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongPlaylistUncheckedUpdateManyWithoutPlaylistInput = {
    songId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    released?: BoolFieldUpdateOperationsInput | boolean
    album?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SongPlaylist?: SongPlaylistUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    released?: BoolFieldUpdateOperationsInput | boolean
    album?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SongPlaylist?: SongPlaylistUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    released?: BoolFieldUpdateOperationsInput | boolean
    album?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SongCountOutputTypeDefaultArgs instead
     */
    export type SongCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SongCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaylistCountOutputTypeDefaultArgs instead
     */
    export type PlaylistCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaylistCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SongDefaultArgs instead
     */
    export type SongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SongDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaylistDefaultArgs instead
     */
    export type PlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaylistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SongPlaylistDefaultArgs instead
     */
    export type SongPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SongPlaylistDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}