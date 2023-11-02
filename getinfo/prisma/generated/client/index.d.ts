
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
 * Model Directions
 * 
 */
export type Directions = $Result.DefaultSelection<Prisma.$DirectionsPayload>
/**
 * Model SubDirections
 * 
 */
export type SubDirections = $Result.DefaultSelection<Prisma.$SubDirectionsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Directions
 * const directions = await prisma.directions.findMany()
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
   * // Fetch zero or more Directions
   * const directions = await prisma.directions.findMany()
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
   * `prisma.directions`: Exposes CRUD operations for the **Directions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Directions
    * const directions = await prisma.directions.findMany()
    * ```
    */
  get directions(): Prisma.DirectionsDelegate<ExtArgs>;

  /**
   * `prisma.subDirections`: Exposes CRUD operations for the **SubDirections** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubDirections
    * const subDirections = await prisma.subDirections.findMany()
    * ```
    */
  get subDirections(): Prisma.SubDirectionsDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
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
    Directions: 'Directions',
    SubDirections: 'SubDirections'
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
      modelProps: 'directions' | 'subDirections'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Directions: {
        payload: Prisma.$DirectionsPayload<ExtArgs>
        fields: Prisma.DirectionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DirectionsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DirectionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DirectionsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DirectionsPayload>
          }
          findFirst: {
            args: Prisma.DirectionsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DirectionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DirectionsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DirectionsPayload>
          }
          findMany: {
            args: Prisma.DirectionsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DirectionsPayload>[]
          }
          create: {
            args: Prisma.DirectionsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DirectionsPayload>
          }
          createMany: {
            args: Prisma.DirectionsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DirectionsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DirectionsPayload>
          }
          update: {
            args: Prisma.DirectionsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DirectionsPayload>
          }
          deleteMany: {
            args: Prisma.DirectionsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DirectionsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DirectionsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DirectionsPayload>
          }
          aggregate: {
            args: Prisma.DirectionsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDirections>
          }
          groupBy: {
            args: Prisma.DirectionsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DirectionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DirectionsCountArgs<ExtArgs>,
            result: $Utils.Optional<DirectionsCountAggregateOutputType> | number
          }
        }
      }
      SubDirections: {
        payload: Prisma.$SubDirectionsPayload<ExtArgs>
        fields: Prisma.SubDirectionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubDirectionsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubDirectionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubDirectionsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubDirectionsPayload>
          }
          findFirst: {
            args: Prisma.SubDirectionsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubDirectionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubDirectionsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubDirectionsPayload>
          }
          findMany: {
            args: Prisma.SubDirectionsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubDirectionsPayload>[]
          }
          create: {
            args: Prisma.SubDirectionsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubDirectionsPayload>
          }
          createMany: {
            args: Prisma.SubDirectionsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SubDirectionsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubDirectionsPayload>
          }
          update: {
            args: Prisma.SubDirectionsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubDirectionsPayload>
          }
          deleteMany: {
            args: Prisma.SubDirectionsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SubDirectionsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SubDirectionsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubDirectionsPayload>
          }
          aggregate: {
            args: Prisma.SubDirectionsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubDirections>
          }
          groupBy: {
            args: Prisma.SubDirectionsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SubDirectionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubDirectionsCountArgs<ExtArgs>,
            result: $Utils.Optional<SubDirectionsCountAggregateOutputType> | number
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
   * Count Type DirectionsCountOutputType
   */

  export type DirectionsCountOutputType = {
    subDirections: number
  }

  export type DirectionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subDirections?: boolean | DirectionsCountOutputTypeCountSubDirectionsArgs
  }

  // Custom InputTypes

  /**
   * DirectionsCountOutputType without action
   */
  export type DirectionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectionsCountOutputType
     */
    select?: DirectionsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DirectionsCountOutputType without action
   */
  export type DirectionsCountOutputTypeCountSubDirectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubDirectionsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Directions
   */

  export type AggregateDirections = {
    _count: DirectionsCountAggregateOutputType | null
    _avg: DirectionsAvgAggregateOutputType | null
    _sum: DirectionsSumAggregateOutputType | null
    _min: DirectionsMinAggregateOutputType | null
    _max: DirectionsMaxAggregateOutputType | null
  }

  export type DirectionsAvgAggregateOutputType = {
    id: number | null
  }

  export type DirectionsSumAggregateOutputType = {
    id: number | null
  }

  export type DirectionsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DirectionsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DirectionsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    professors: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DirectionsAvgAggregateInputType = {
    id?: true
  }

  export type DirectionsSumAggregateInputType = {
    id?: true
  }

  export type DirectionsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DirectionsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DirectionsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    professors?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DirectionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Directions to aggregate.
     */
    where?: DirectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directions to fetch.
     */
    orderBy?: DirectionsOrderByWithRelationInput | DirectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DirectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Directions
    **/
    _count?: true | DirectionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DirectionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DirectionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectionsMaxAggregateInputType
  }

  export type GetDirectionsAggregateType<T extends DirectionsAggregateArgs> = {
        [P in keyof T & keyof AggregateDirections]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirections[P]>
      : GetScalarType<T[P], AggregateDirections[P]>
  }




  export type DirectionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectionsWhereInput
    orderBy?: DirectionsOrderByWithAggregationInput | DirectionsOrderByWithAggregationInput[]
    by: DirectionsScalarFieldEnum[] | DirectionsScalarFieldEnum
    having?: DirectionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectionsCountAggregateInputType | true
    _avg?: DirectionsAvgAggregateInputType
    _sum?: DirectionsSumAggregateInputType
    _min?: DirectionsMinAggregateInputType
    _max?: DirectionsMaxAggregateInputType
  }

  export type DirectionsGroupByOutputType = {
    id: number
    name: string
    description: string
    professors: string[]
    createdAt: Date
    updatedAt: Date
    _count: DirectionsCountAggregateOutputType | null
    _avg: DirectionsAvgAggregateOutputType | null
    _sum: DirectionsSumAggregateOutputType | null
    _min: DirectionsMinAggregateOutputType | null
    _max: DirectionsMaxAggregateOutputType | null
  }

  type GetDirectionsGroupByPayload<T extends DirectionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DirectionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectionsGroupByOutputType[P]>
            : GetScalarType<T[P], DirectionsGroupByOutputType[P]>
        }
      >
    >


  export type DirectionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    professors?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subDirections?: boolean | Directions$subDirectionsArgs<ExtArgs>
    _count?: boolean | DirectionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["directions"]>

  export type DirectionsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    professors?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DirectionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subDirections?: boolean | Directions$subDirectionsArgs<ExtArgs>
    _count?: boolean | DirectionsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DirectionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Directions"
    objects: {
      subDirections: Prisma.$SubDirectionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      professors: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["directions"]>
    composites: {}
  }


  type DirectionsGetPayload<S extends boolean | null | undefined | DirectionsDefaultArgs> = $Result.GetResult<Prisma.$DirectionsPayload, S>

  type DirectionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DirectionsFindManyArgs, 'select' | 'include'> & {
      select?: DirectionsCountAggregateInputType | true
    }

  export interface DirectionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Directions'], meta: { name: 'Directions' } }
    /**
     * Find zero or one Directions that matches the filter.
     * @param {DirectionsFindUniqueArgs} args - Arguments to find a Directions
     * @example
     * // Get one Directions
     * const directions = await prisma.directions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DirectionsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DirectionsFindUniqueArgs<ExtArgs>>
    ): Prisma__DirectionsClient<$Result.GetResult<Prisma.$DirectionsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Directions that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DirectionsFindUniqueOrThrowArgs} args - Arguments to find a Directions
     * @example
     * // Get one Directions
     * const directions = await prisma.directions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DirectionsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DirectionsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DirectionsClient<$Result.GetResult<Prisma.$DirectionsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Directions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectionsFindFirstArgs} args - Arguments to find a Directions
     * @example
     * // Get one Directions
     * const directions = await prisma.directions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DirectionsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DirectionsFindFirstArgs<ExtArgs>>
    ): Prisma__DirectionsClient<$Result.GetResult<Prisma.$DirectionsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Directions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectionsFindFirstOrThrowArgs} args - Arguments to find a Directions
     * @example
     * // Get one Directions
     * const directions = await prisma.directions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DirectionsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DirectionsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DirectionsClient<$Result.GetResult<Prisma.$DirectionsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Directions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Directions
     * const directions = await prisma.directions.findMany()
     * 
     * // Get first 10 Directions
     * const directions = await prisma.directions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const directionsWithIdOnly = await prisma.directions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DirectionsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DirectionsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectionsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Directions.
     * @param {DirectionsCreateArgs} args - Arguments to create a Directions.
     * @example
     * // Create one Directions
     * const Directions = await prisma.directions.create({
     *   data: {
     *     // ... data to create a Directions
     *   }
     * })
     * 
    **/
    create<T extends DirectionsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DirectionsCreateArgs<ExtArgs>>
    ): Prisma__DirectionsClient<$Result.GetResult<Prisma.$DirectionsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Directions.
     *     @param {DirectionsCreateManyArgs} args - Arguments to create many Directions.
     *     @example
     *     // Create many Directions
     *     const directions = await prisma.directions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DirectionsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DirectionsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Directions.
     * @param {DirectionsDeleteArgs} args - Arguments to delete one Directions.
     * @example
     * // Delete one Directions
     * const Directions = await prisma.directions.delete({
     *   where: {
     *     // ... filter to delete one Directions
     *   }
     * })
     * 
    **/
    delete<T extends DirectionsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DirectionsDeleteArgs<ExtArgs>>
    ): Prisma__DirectionsClient<$Result.GetResult<Prisma.$DirectionsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Directions.
     * @param {DirectionsUpdateArgs} args - Arguments to update one Directions.
     * @example
     * // Update one Directions
     * const directions = await prisma.directions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DirectionsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DirectionsUpdateArgs<ExtArgs>>
    ): Prisma__DirectionsClient<$Result.GetResult<Prisma.$DirectionsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Directions.
     * @param {DirectionsDeleteManyArgs} args - Arguments to filter Directions to delete.
     * @example
     * // Delete a few Directions
     * const { count } = await prisma.directions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DirectionsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DirectionsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Directions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Directions
     * const directions = await prisma.directions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DirectionsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DirectionsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Directions.
     * @param {DirectionsUpsertArgs} args - Arguments to update or create a Directions.
     * @example
     * // Update or create a Directions
     * const directions = await prisma.directions.upsert({
     *   create: {
     *     // ... data to create a Directions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Directions we want to update
     *   }
     * })
    **/
    upsert<T extends DirectionsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DirectionsUpsertArgs<ExtArgs>>
    ): Prisma__DirectionsClient<$Result.GetResult<Prisma.$DirectionsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Directions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectionsCountArgs} args - Arguments to filter Directions to count.
     * @example
     * // Count the number of Directions
     * const count = await prisma.directions.count({
     *   where: {
     *     // ... the filter for the Directions we want to count
     *   }
     * })
    **/
    count<T extends DirectionsCountArgs>(
      args?: Subset<T, DirectionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Directions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DirectionsAggregateArgs>(args: Subset<T, DirectionsAggregateArgs>): Prisma.PrismaPromise<GetDirectionsAggregateType<T>>

    /**
     * Group by Directions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectionsGroupByArgs} args - Group by arguments.
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
      T extends DirectionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DirectionsGroupByArgs['orderBy'] }
        : { orderBy?: DirectionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DirectionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Directions model
   */
  readonly fields: DirectionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Directions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DirectionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    subDirections<T extends Directions$subDirectionsArgs<ExtArgs> = {}>(args?: Subset<T, Directions$subDirectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubDirectionsPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Directions model
   */ 
  interface DirectionsFieldRefs {
    readonly id: FieldRef<"Directions", 'Int'>
    readonly name: FieldRef<"Directions", 'String'>
    readonly description: FieldRef<"Directions", 'String'>
    readonly professors: FieldRef<"Directions", 'String[]'>
    readonly createdAt: FieldRef<"Directions", 'DateTime'>
    readonly updatedAt: FieldRef<"Directions", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Directions findUnique
   */
  export type DirectionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directions
     */
    select?: DirectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectionsInclude<ExtArgs> | null
    /**
     * Filter, which Directions to fetch.
     */
    where: DirectionsWhereUniqueInput
  }


  /**
   * Directions findUniqueOrThrow
   */
  export type DirectionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directions
     */
    select?: DirectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectionsInclude<ExtArgs> | null
    /**
     * Filter, which Directions to fetch.
     */
    where: DirectionsWhereUniqueInput
  }


  /**
   * Directions findFirst
   */
  export type DirectionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directions
     */
    select?: DirectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectionsInclude<ExtArgs> | null
    /**
     * Filter, which Directions to fetch.
     */
    where?: DirectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directions to fetch.
     */
    orderBy?: DirectionsOrderByWithRelationInput | DirectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Directions.
     */
    cursor?: DirectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Directions.
     */
    distinct?: DirectionsScalarFieldEnum | DirectionsScalarFieldEnum[]
  }


  /**
   * Directions findFirstOrThrow
   */
  export type DirectionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directions
     */
    select?: DirectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectionsInclude<ExtArgs> | null
    /**
     * Filter, which Directions to fetch.
     */
    where?: DirectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directions to fetch.
     */
    orderBy?: DirectionsOrderByWithRelationInput | DirectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Directions.
     */
    cursor?: DirectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Directions.
     */
    distinct?: DirectionsScalarFieldEnum | DirectionsScalarFieldEnum[]
  }


  /**
   * Directions findMany
   */
  export type DirectionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directions
     */
    select?: DirectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectionsInclude<ExtArgs> | null
    /**
     * Filter, which Directions to fetch.
     */
    where?: DirectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directions to fetch.
     */
    orderBy?: DirectionsOrderByWithRelationInput | DirectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Directions.
     */
    cursor?: DirectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directions.
     */
    skip?: number
    distinct?: DirectionsScalarFieldEnum | DirectionsScalarFieldEnum[]
  }


  /**
   * Directions create
   */
  export type DirectionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directions
     */
    select?: DirectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Directions.
     */
    data: XOR<DirectionsCreateInput, DirectionsUncheckedCreateInput>
  }


  /**
   * Directions createMany
   */
  export type DirectionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Directions.
     */
    data: DirectionsCreateManyInput | DirectionsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Directions update
   */
  export type DirectionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directions
     */
    select?: DirectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Directions.
     */
    data: XOR<DirectionsUpdateInput, DirectionsUncheckedUpdateInput>
    /**
     * Choose, which Directions to update.
     */
    where: DirectionsWhereUniqueInput
  }


  /**
   * Directions updateMany
   */
  export type DirectionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Directions.
     */
    data: XOR<DirectionsUpdateManyMutationInput, DirectionsUncheckedUpdateManyInput>
    /**
     * Filter which Directions to update
     */
    where?: DirectionsWhereInput
  }


  /**
   * Directions upsert
   */
  export type DirectionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directions
     */
    select?: DirectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Directions to update in case it exists.
     */
    where: DirectionsWhereUniqueInput
    /**
     * In case the Directions found by the `where` argument doesn't exist, create a new Directions with this data.
     */
    create: XOR<DirectionsCreateInput, DirectionsUncheckedCreateInput>
    /**
     * In case the Directions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DirectionsUpdateInput, DirectionsUncheckedUpdateInput>
  }


  /**
   * Directions delete
   */
  export type DirectionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directions
     */
    select?: DirectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectionsInclude<ExtArgs> | null
    /**
     * Filter which Directions to delete.
     */
    where: DirectionsWhereUniqueInput
  }


  /**
   * Directions deleteMany
   */
  export type DirectionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Directions to delete
     */
    where?: DirectionsWhereInput
  }


  /**
   * Directions.subDirections
   */
  export type Directions$subDirectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDirections
     */
    select?: SubDirectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubDirectionsInclude<ExtArgs> | null
    where?: SubDirectionsWhereInput
    orderBy?: SubDirectionsOrderByWithRelationInput | SubDirectionsOrderByWithRelationInput[]
    cursor?: SubDirectionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubDirectionsScalarFieldEnum | SubDirectionsScalarFieldEnum[]
  }


  /**
   * Directions without action
   */
  export type DirectionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directions
     */
    select?: DirectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectionsInclude<ExtArgs> | null
  }



  /**
   * Model SubDirections
   */

  export type AggregateSubDirections = {
    _count: SubDirectionsCountAggregateOutputType | null
    _avg: SubDirectionsAvgAggregateOutputType | null
    _sum: SubDirectionsSumAggregateOutputType | null
    _min: SubDirectionsMinAggregateOutputType | null
    _max: SubDirectionsMaxAggregateOutputType | null
  }

  export type SubDirectionsAvgAggregateOutputType = {
    id: number | null
    directionId: number | null
  }

  export type SubDirectionsSumAggregateOutputType = {
    id: number | null
    directionId: number | null
  }

  export type SubDirectionsMinAggregateOutputType = {
    id: number | null
    name: string | null
    additionalInfo: string | null
    examplelink: string | null
    additionallink: string | null
    validationField: string | null
    directionId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubDirectionsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    additionalInfo: string | null
    examplelink: string | null
    additionallink: string | null
    validationField: string | null
    directionId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubDirectionsCountAggregateOutputType = {
    id: number
    name: number
    additionalInfo: number
    examplelink: number
    additionallink: number
    validationField: number
    directionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubDirectionsAvgAggregateInputType = {
    id?: true
    directionId?: true
  }

  export type SubDirectionsSumAggregateInputType = {
    id?: true
    directionId?: true
  }

  export type SubDirectionsMinAggregateInputType = {
    id?: true
    name?: true
    additionalInfo?: true
    examplelink?: true
    additionallink?: true
    validationField?: true
    directionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubDirectionsMaxAggregateInputType = {
    id?: true
    name?: true
    additionalInfo?: true
    examplelink?: true
    additionallink?: true
    validationField?: true
    directionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubDirectionsCountAggregateInputType = {
    id?: true
    name?: true
    additionalInfo?: true
    examplelink?: true
    additionallink?: true
    validationField?: true
    directionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubDirectionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubDirections to aggregate.
     */
    where?: SubDirectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubDirections to fetch.
     */
    orderBy?: SubDirectionsOrderByWithRelationInput | SubDirectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubDirectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubDirections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubDirections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubDirections
    **/
    _count?: true | SubDirectionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubDirectionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubDirectionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubDirectionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubDirectionsMaxAggregateInputType
  }

  export type GetSubDirectionsAggregateType<T extends SubDirectionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubDirections]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubDirections[P]>
      : GetScalarType<T[P], AggregateSubDirections[P]>
  }




  export type SubDirectionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubDirectionsWhereInput
    orderBy?: SubDirectionsOrderByWithAggregationInput | SubDirectionsOrderByWithAggregationInput[]
    by: SubDirectionsScalarFieldEnum[] | SubDirectionsScalarFieldEnum
    having?: SubDirectionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubDirectionsCountAggregateInputType | true
    _avg?: SubDirectionsAvgAggregateInputType
    _sum?: SubDirectionsSumAggregateInputType
    _min?: SubDirectionsMinAggregateInputType
    _max?: SubDirectionsMaxAggregateInputType
  }

  export type SubDirectionsGroupByOutputType = {
    id: number
    name: string
    additionalInfo: string
    examplelink: string
    additionallink: string
    validationField: string
    directionId: number
    createdAt: Date
    updatedAt: Date
    _count: SubDirectionsCountAggregateOutputType | null
    _avg: SubDirectionsAvgAggregateOutputType | null
    _sum: SubDirectionsSumAggregateOutputType | null
    _min: SubDirectionsMinAggregateOutputType | null
    _max: SubDirectionsMaxAggregateOutputType | null
  }

  type GetSubDirectionsGroupByPayload<T extends SubDirectionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubDirectionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubDirectionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubDirectionsGroupByOutputType[P]>
            : GetScalarType<T[P], SubDirectionsGroupByOutputType[P]>
        }
      >
    >


  export type SubDirectionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    additionalInfo?: boolean
    examplelink?: boolean
    additionallink?: boolean
    validationField?: boolean
    directionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    directions?: boolean | DirectionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subDirections"]>

  export type SubDirectionsSelectScalar = {
    id?: boolean
    name?: boolean
    additionalInfo?: boolean
    examplelink?: boolean
    additionallink?: boolean
    validationField?: boolean
    directionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubDirectionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    directions?: boolean | DirectionsDefaultArgs<ExtArgs>
  }


  export type $SubDirectionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubDirections"
    objects: {
      directions: Prisma.$DirectionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      additionalInfo: string
      examplelink: string
      additionallink: string
      validationField: string
      directionId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subDirections"]>
    composites: {}
  }


  type SubDirectionsGetPayload<S extends boolean | null | undefined | SubDirectionsDefaultArgs> = $Result.GetResult<Prisma.$SubDirectionsPayload, S>

  type SubDirectionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubDirectionsFindManyArgs, 'select' | 'include'> & {
      select?: SubDirectionsCountAggregateInputType | true
    }

  export interface SubDirectionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubDirections'], meta: { name: 'SubDirections' } }
    /**
     * Find zero or one SubDirections that matches the filter.
     * @param {SubDirectionsFindUniqueArgs} args - Arguments to find a SubDirections
     * @example
     * // Get one SubDirections
     * const subDirections = await prisma.subDirections.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SubDirectionsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SubDirectionsFindUniqueArgs<ExtArgs>>
    ): Prisma__SubDirectionsClient<$Result.GetResult<Prisma.$SubDirectionsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SubDirections that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SubDirectionsFindUniqueOrThrowArgs} args - Arguments to find a SubDirections
     * @example
     * // Get one SubDirections
     * const subDirections = await prisma.subDirections.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SubDirectionsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubDirectionsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SubDirectionsClient<$Result.GetResult<Prisma.$SubDirectionsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SubDirections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubDirectionsFindFirstArgs} args - Arguments to find a SubDirections
     * @example
     * // Get one SubDirections
     * const subDirections = await prisma.subDirections.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SubDirectionsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SubDirectionsFindFirstArgs<ExtArgs>>
    ): Prisma__SubDirectionsClient<$Result.GetResult<Prisma.$SubDirectionsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SubDirections that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubDirectionsFindFirstOrThrowArgs} args - Arguments to find a SubDirections
     * @example
     * // Get one SubDirections
     * const subDirections = await prisma.subDirections.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SubDirectionsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubDirectionsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SubDirectionsClient<$Result.GetResult<Prisma.$SubDirectionsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SubDirections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubDirectionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubDirections
     * const subDirections = await prisma.subDirections.findMany()
     * 
     * // Get first 10 SubDirections
     * const subDirections = await prisma.subDirections.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subDirectionsWithIdOnly = await prisma.subDirections.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SubDirectionsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubDirectionsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubDirectionsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SubDirections.
     * @param {SubDirectionsCreateArgs} args - Arguments to create a SubDirections.
     * @example
     * // Create one SubDirections
     * const SubDirections = await prisma.subDirections.create({
     *   data: {
     *     // ... data to create a SubDirections
     *   }
     * })
     * 
    **/
    create<T extends SubDirectionsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SubDirectionsCreateArgs<ExtArgs>>
    ): Prisma__SubDirectionsClient<$Result.GetResult<Prisma.$SubDirectionsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SubDirections.
     *     @param {SubDirectionsCreateManyArgs} args - Arguments to create many SubDirections.
     *     @example
     *     // Create many SubDirections
     *     const subDirections = await prisma.subDirections.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SubDirectionsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubDirectionsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubDirections.
     * @param {SubDirectionsDeleteArgs} args - Arguments to delete one SubDirections.
     * @example
     * // Delete one SubDirections
     * const SubDirections = await prisma.subDirections.delete({
     *   where: {
     *     // ... filter to delete one SubDirections
     *   }
     * })
     * 
    **/
    delete<T extends SubDirectionsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SubDirectionsDeleteArgs<ExtArgs>>
    ): Prisma__SubDirectionsClient<$Result.GetResult<Prisma.$SubDirectionsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SubDirections.
     * @param {SubDirectionsUpdateArgs} args - Arguments to update one SubDirections.
     * @example
     * // Update one SubDirections
     * const subDirections = await prisma.subDirections.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SubDirectionsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SubDirectionsUpdateArgs<ExtArgs>>
    ): Prisma__SubDirectionsClient<$Result.GetResult<Prisma.$SubDirectionsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SubDirections.
     * @param {SubDirectionsDeleteManyArgs} args - Arguments to filter SubDirections to delete.
     * @example
     * // Delete a few SubDirections
     * const { count } = await prisma.subDirections.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SubDirectionsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubDirectionsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubDirections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubDirectionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubDirections
     * const subDirections = await prisma.subDirections.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SubDirectionsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SubDirectionsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubDirections.
     * @param {SubDirectionsUpsertArgs} args - Arguments to update or create a SubDirections.
     * @example
     * // Update or create a SubDirections
     * const subDirections = await prisma.subDirections.upsert({
     *   create: {
     *     // ... data to create a SubDirections
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubDirections we want to update
     *   }
     * })
    **/
    upsert<T extends SubDirectionsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SubDirectionsUpsertArgs<ExtArgs>>
    ): Prisma__SubDirectionsClient<$Result.GetResult<Prisma.$SubDirectionsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SubDirections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubDirectionsCountArgs} args - Arguments to filter SubDirections to count.
     * @example
     * // Count the number of SubDirections
     * const count = await prisma.subDirections.count({
     *   where: {
     *     // ... the filter for the SubDirections we want to count
     *   }
     * })
    **/
    count<T extends SubDirectionsCountArgs>(
      args?: Subset<T, SubDirectionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubDirectionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubDirections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubDirectionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubDirectionsAggregateArgs>(args: Subset<T, SubDirectionsAggregateArgs>): Prisma.PrismaPromise<GetSubDirectionsAggregateType<T>>

    /**
     * Group by SubDirections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubDirectionsGroupByArgs} args - Group by arguments.
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
      T extends SubDirectionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubDirectionsGroupByArgs['orderBy'] }
        : { orderBy?: SubDirectionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubDirectionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubDirectionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubDirections model
   */
  readonly fields: SubDirectionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubDirections.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubDirectionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    directions<T extends DirectionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DirectionsDefaultArgs<ExtArgs>>): Prisma__DirectionsClient<$Result.GetResult<Prisma.$DirectionsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the SubDirections model
   */ 
  interface SubDirectionsFieldRefs {
    readonly id: FieldRef<"SubDirections", 'Int'>
    readonly name: FieldRef<"SubDirections", 'String'>
    readonly additionalInfo: FieldRef<"SubDirections", 'String'>
    readonly examplelink: FieldRef<"SubDirections", 'String'>
    readonly additionallink: FieldRef<"SubDirections", 'String'>
    readonly validationField: FieldRef<"SubDirections", 'String'>
    readonly directionId: FieldRef<"SubDirections", 'Int'>
    readonly createdAt: FieldRef<"SubDirections", 'DateTime'>
    readonly updatedAt: FieldRef<"SubDirections", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * SubDirections findUnique
   */
  export type SubDirectionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDirections
     */
    select?: SubDirectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubDirectionsInclude<ExtArgs> | null
    /**
     * Filter, which SubDirections to fetch.
     */
    where: SubDirectionsWhereUniqueInput
  }


  /**
   * SubDirections findUniqueOrThrow
   */
  export type SubDirectionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDirections
     */
    select?: SubDirectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubDirectionsInclude<ExtArgs> | null
    /**
     * Filter, which SubDirections to fetch.
     */
    where: SubDirectionsWhereUniqueInput
  }


  /**
   * SubDirections findFirst
   */
  export type SubDirectionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDirections
     */
    select?: SubDirectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubDirectionsInclude<ExtArgs> | null
    /**
     * Filter, which SubDirections to fetch.
     */
    where?: SubDirectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubDirections to fetch.
     */
    orderBy?: SubDirectionsOrderByWithRelationInput | SubDirectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubDirections.
     */
    cursor?: SubDirectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubDirections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubDirections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubDirections.
     */
    distinct?: SubDirectionsScalarFieldEnum | SubDirectionsScalarFieldEnum[]
  }


  /**
   * SubDirections findFirstOrThrow
   */
  export type SubDirectionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDirections
     */
    select?: SubDirectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubDirectionsInclude<ExtArgs> | null
    /**
     * Filter, which SubDirections to fetch.
     */
    where?: SubDirectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubDirections to fetch.
     */
    orderBy?: SubDirectionsOrderByWithRelationInput | SubDirectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubDirections.
     */
    cursor?: SubDirectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubDirections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubDirections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubDirections.
     */
    distinct?: SubDirectionsScalarFieldEnum | SubDirectionsScalarFieldEnum[]
  }


  /**
   * SubDirections findMany
   */
  export type SubDirectionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDirections
     */
    select?: SubDirectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubDirectionsInclude<ExtArgs> | null
    /**
     * Filter, which SubDirections to fetch.
     */
    where?: SubDirectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubDirections to fetch.
     */
    orderBy?: SubDirectionsOrderByWithRelationInput | SubDirectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubDirections.
     */
    cursor?: SubDirectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubDirections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubDirections.
     */
    skip?: number
    distinct?: SubDirectionsScalarFieldEnum | SubDirectionsScalarFieldEnum[]
  }


  /**
   * SubDirections create
   */
  export type SubDirectionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDirections
     */
    select?: SubDirectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubDirectionsInclude<ExtArgs> | null
    /**
     * The data needed to create a SubDirections.
     */
    data: XOR<SubDirectionsCreateInput, SubDirectionsUncheckedCreateInput>
  }


  /**
   * SubDirections createMany
   */
  export type SubDirectionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubDirections.
     */
    data: SubDirectionsCreateManyInput | SubDirectionsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SubDirections update
   */
  export type SubDirectionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDirections
     */
    select?: SubDirectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubDirectionsInclude<ExtArgs> | null
    /**
     * The data needed to update a SubDirections.
     */
    data: XOR<SubDirectionsUpdateInput, SubDirectionsUncheckedUpdateInput>
    /**
     * Choose, which SubDirections to update.
     */
    where: SubDirectionsWhereUniqueInput
  }


  /**
   * SubDirections updateMany
   */
  export type SubDirectionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubDirections.
     */
    data: XOR<SubDirectionsUpdateManyMutationInput, SubDirectionsUncheckedUpdateManyInput>
    /**
     * Filter which SubDirections to update
     */
    where?: SubDirectionsWhereInput
  }


  /**
   * SubDirections upsert
   */
  export type SubDirectionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDirections
     */
    select?: SubDirectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubDirectionsInclude<ExtArgs> | null
    /**
     * The filter to search for the SubDirections to update in case it exists.
     */
    where: SubDirectionsWhereUniqueInput
    /**
     * In case the SubDirections found by the `where` argument doesn't exist, create a new SubDirections with this data.
     */
    create: XOR<SubDirectionsCreateInput, SubDirectionsUncheckedCreateInput>
    /**
     * In case the SubDirections was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubDirectionsUpdateInput, SubDirectionsUncheckedUpdateInput>
  }


  /**
   * SubDirections delete
   */
  export type SubDirectionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDirections
     */
    select?: SubDirectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubDirectionsInclude<ExtArgs> | null
    /**
     * Filter which SubDirections to delete.
     */
    where: SubDirectionsWhereUniqueInput
  }


  /**
   * SubDirections deleteMany
   */
  export type SubDirectionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubDirections to delete
     */
    where?: SubDirectionsWhereInput
  }


  /**
   * SubDirections without action
   */
  export type SubDirectionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDirections
     */
    select?: SubDirectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubDirectionsInclude<ExtArgs> | null
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


  export const DirectionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    professors: 'professors',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DirectionsScalarFieldEnum = (typeof DirectionsScalarFieldEnum)[keyof typeof DirectionsScalarFieldEnum]


  export const SubDirectionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    additionalInfo: 'additionalInfo',
    examplelink: 'examplelink',
    additionallink: 'additionallink',
    validationField: 'validationField',
    directionId: 'directionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubDirectionsScalarFieldEnum = (typeof SubDirectionsScalarFieldEnum)[keyof typeof SubDirectionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DirectionsWhereInput = {
    AND?: DirectionsWhereInput | DirectionsWhereInput[]
    OR?: DirectionsWhereInput[]
    NOT?: DirectionsWhereInput | DirectionsWhereInput[]
    id?: IntFilter<"Directions"> | number
    name?: StringFilter<"Directions"> | string
    description?: StringFilter<"Directions"> | string
    professors?: StringNullableListFilter<"Directions">
    createdAt?: DateTimeFilter<"Directions"> | Date | string
    updatedAt?: DateTimeFilter<"Directions"> | Date | string
    subDirections?: SubDirectionsListRelationFilter
  }

  export type DirectionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    professors?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subDirections?: SubDirectionsOrderByRelationAggregateInput
  }

  export type DirectionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DirectionsWhereInput | DirectionsWhereInput[]
    OR?: DirectionsWhereInput[]
    NOT?: DirectionsWhereInput | DirectionsWhereInput[]
    name?: StringFilter<"Directions"> | string
    description?: StringFilter<"Directions"> | string
    professors?: StringNullableListFilter<"Directions">
    createdAt?: DateTimeFilter<"Directions"> | Date | string
    updatedAt?: DateTimeFilter<"Directions"> | Date | string
    subDirections?: SubDirectionsListRelationFilter
  }, "id">

  export type DirectionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    professors?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DirectionsCountOrderByAggregateInput
    _avg?: DirectionsAvgOrderByAggregateInput
    _max?: DirectionsMaxOrderByAggregateInput
    _min?: DirectionsMinOrderByAggregateInput
    _sum?: DirectionsSumOrderByAggregateInput
  }

  export type DirectionsScalarWhereWithAggregatesInput = {
    AND?: DirectionsScalarWhereWithAggregatesInput | DirectionsScalarWhereWithAggregatesInput[]
    OR?: DirectionsScalarWhereWithAggregatesInput[]
    NOT?: DirectionsScalarWhereWithAggregatesInput | DirectionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Directions"> | number
    name?: StringWithAggregatesFilter<"Directions"> | string
    description?: StringWithAggregatesFilter<"Directions"> | string
    professors?: StringNullableListFilter<"Directions">
    createdAt?: DateTimeWithAggregatesFilter<"Directions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Directions"> | Date | string
  }

  export type SubDirectionsWhereInput = {
    AND?: SubDirectionsWhereInput | SubDirectionsWhereInput[]
    OR?: SubDirectionsWhereInput[]
    NOT?: SubDirectionsWhereInput | SubDirectionsWhereInput[]
    id?: IntFilter<"SubDirections"> | number
    name?: StringFilter<"SubDirections"> | string
    additionalInfo?: StringFilter<"SubDirections"> | string
    examplelink?: StringFilter<"SubDirections"> | string
    additionallink?: StringFilter<"SubDirections"> | string
    validationField?: StringFilter<"SubDirections"> | string
    directionId?: IntFilter<"SubDirections"> | number
    createdAt?: DateTimeFilter<"SubDirections"> | Date | string
    updatedAt?: DateTimeFilter<"SubDirections"> | Date | string
    directions?: XOR<DirectionsRelationFilter, DirectionsWhereInput>
  }

  export type SubDirectionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    additionalInfo?: SortOrder
    examplelink?: SortOrder
    additionallink?: SortOrder
    validationField?: SortOrder
    directionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    directions?: DirectionsOrderByWithRelationInput
  }

  export type SubDirectionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubDirectionsWhereInput | SubDirectionsWhereInput[]
    OR?: SubDirectionsWhereInput[]
    NOT?: SubDirectionsWhereInput | SubDirectionsWhereInput[]
    name?: StringFilter<"SubDirections"> | string
    additionalInfo?: StringFilter<"SubDirections"> | string
    examplelink?: StringFilter<"SubDirections"> | string
    additionallink?: StringFilter<"SubDirections"> | string
    validationField?: StringFilter<"SubDirections"> | string
    directionId?: IntFilter<"SubDirections"> | number
    createdAt?: DateTimeFilter<"SubDirections"> | Date | string
    updatedAt?: DateTimeFilter<"SubDirections"> | Date | string
    directions?: XOR<DirectionsRelationFilter, DirectionsWhereInput>
  }, "id">

  export type SubDirectionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    additionalInfo?: SortOrder
    examplelink?: SortOrder
    additionallink?: SortOrder
    validationField?: SortOrder
    directionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubDirectionsCountOrderByAggregateInput
    _avg?: SubDirectionsAvgOrderByAggregateInput
    _max?: SubDirectionsMaxOrderByAggregateInput
    _min?: SubDirectionsMinOrderByAggregateInput
    _sum?: SubDirectionsSumOrderByAggregateInput
  }

  export type SubDirectionsScalarWhereWithAggregatesInput = {
    AND?: SubDirectionsScalarWhereWithAggregatesInput | SubDirectionsScalarWhereWithAggregatesInput[]
    OR?: SubDirectionsScalarWhereWithAggregatesInput[]
    NOT?: SubDirectionsScalarWhereWithAggregatesInput | SubDirectionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubDirections"> | number
    name?: StringWithAggregatesFilter<"SubDirections"> | string
    additionalInfo?: StringWithAggregatesFilter<"SubDirections"> | string
    examplelink?: StringWithAggregatesFilter<"SubDirections"> | string
    additionallink?: StringWithAggregatesFilter<"SubDirections"> | string
    validationField?: StringWithAggregatesFilter<"SubDirections"> | string
    directionId?: IntWithAggregatesFilter<"SubDirections"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SubDirections"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubDirections"> | Date | string
  }

  export type DirectionsCreateInput = {
    name: string
    description: string
    professors?: DirectionsCreateprofessorsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    subDirections?: SubDirectionsCreateNestedManyWithoutDirectionsInput
  }

  export type DirectionsUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    professors?: DirectionsCreateprofessorsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    subDirections?: SubDirectionsUncheckedCreateNestedManyWithoutDirectionsInput
  }

  export type DirectionsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    professors?: DirectionsUpdateprofessorsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subDirections?: SubDirectionsUpdateManyWithoutDirectionsNestedInput
  }

  export type DirectionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    professors?: DirectionsUpdateprofessorsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subDirections?: SubDirectionsUncheckedUpdateManyWithoutDirectionsNestedInput
  }

  export type DirectionsCreateManyInput = {
    id?: number
    name: string
    description: string
    professors?: DirectionsCreateprofessorsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectionsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    professors?: DirectionsUpdateprofessorsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    professors?: DirectionsUpdateprofessorsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubDirectionsCreateInput = {
    name: string
    additionalInfo: string
    examplelink: string
    additionallink: string
    validationField: string
    createdAt?: Date | string
    updatedAt?: Date | string
    directions: DirectionsCreateNestedOneWithoutSubDirectionsInput
  }

  export type SubDirectionsUncheckedCreateInput = {
    id?: number
    name: string
    additionalInfo: string
    examplelink: string
    additionallink: string
    validationField: string
    directionId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubDirectionsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    additionalInfo?: StringFieldUpdateOperationsInput | string
    examplelink?: StringFieldUpdateOperationsInput | string
    additionallink?: StringFieldUpdateOperationsInput | string
    validationField?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directions?: DirectionsUpdateOneRequiredWithoutSubDirectionsNestedInput
  }

  export type SubDirectionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    additionalInfo?: StringFieldUpdateOperationsInput | string
    examplelink?: StringFieldUpdateOperationsInput | string
    additionallink?: StringFieldUpdateOperationsInput | string
    validationField?: StringFieldUpdateOperationsInput | string
    directionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubDirectionsCreateManyInput = {
    id?: number
    name: string
    additionalInfo: string
    examplelink: string
    additionallink: string
    validationField: string
    directionId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubDirectionsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    additionalInfo?: StringFieldUpdateOperationsInput | string
    examplelink?: StringFieldUpdateOperationsInput | string
    additionallink?: StringFieldUpdateOperationsInput | string
    validationField?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubDirectionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    additionalInfo?: StringFieldUpdateOperationsInput | string
    examplelink?: StringFieldUpdateOperationsInput | string
    additionallink?: StringFieldUpdateOperationsInput | string
    validationField?: StringFieldUpdateOperationsInput | string
    directionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SubDirectionsListRelationFilter = {
    every?: SubDirectionsWhereInput
    some?: SubDirectionsWhereInput
    none?: SubDirectionsWhereInput
  }

  export type SubDirectionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DirectionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    professors?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectionsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DirectionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectionsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DirectionsRelationFilter = {
    is?: DirectionsWhereInput
    isNot?: DirectionsWhereInput
  }

  export type SubDirectionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    additionalInfo?: SortOrder
    examplelink?: SortOrder
    additionallink?: SortOrder
    validationField?: SortOrder
    directionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubDirectionsAvgOrderByAggregateInput = {
    id?: SortOrder
    directionId?: SortOrder
  }

  export type SubDirectionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    additionalInfo?: SortOrder
    examplelink?: SortOrder
    additionallink?: SortOrder
    validationField?: SortOrder
    directionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubDirectionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    additionalInfo?: SortOrder
    examplelink?: SortOrder
    additionallink?: SortOrder
    validationField?: SortOrder
    directionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubDirectionsSumOrderByAggregateInput = {
    id?: SortOrder
    directionId?: SortOrder
  }

  export type DirectionsCreateprofessorsInput = {
    set: string[]
  }

  export type SubDirectionsCreateNestedManyWithoutDirectionsInput = {
    create?: XOR<SubDirectionsCreateWithoutDirectionsInput, SubDirectionsUncheckedCreateWithoutDirectionsInput> | SubDirectionsCreateWithoutDirectionsInput[] | SubDirectionsUncheckedCreateWithoutDirectionsInput[]
    connectOrCreate?: SubDirectionsCreateOrConnectWithoutDirectionsInput | SubDirectionsCreateOrConnectWithoutDirectionsInput[]
    createMany?: SubDirectionsCreateManyDirectionsInputEnvelope
    connect?: SubDirectionsWhereUniqueInput | SubDirectionsWhereUniqueInput[]
  }

  export type SubDirectionsUncheckedCreateNestedManyWithoutDirectionsInput = {
    create?: XOR<SubDirectionsCreateWithoutDirectionsInput, SubDirectionsUncheckedCreateWithoutDirectionsInput> | SubDirectionsCreateWithoutDirectionsInput[] | SubDirectionsUncheckedCreateWithoutDirectionsInput[]
    connectOrCreate?: SubDirectionsCreateOrConnectWithoutDirectionsInput | SubDirectionsCreateOrConnectWithoutDirectionsInput[]
    createMany?: SubDirectionsCreateManyDirectionsInputEnvelope
    connect?: SubDirectionsWhereUniqueInput | SubDirectionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DirectionsUpdateprofessorsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubDirectionsUpdateManyWithoutDirectionsNestedInput = {
    create?: XOR<SubDirectionsCreateWithoutDirectionsInput, SubDirectionsUncheckedCreateWithoutDirectionsInput> | SubDirectionsCreateWithoutDirectionsInput[] | SubDirectionsUncheckedCreateWithoutDirectionsInput[]
    connectOrCreate?: SubDirectionsCreateOrConnectWithoutDirectionsInput | SubDirectionsCreateOrConnectWithoutDirectionsInput[]
    upsert?: SubDirectionsUpsertWithWhereUniqueWithoutDirectionsInput | SubDirectionsUpsertWithWhereUniqueWithoutDirectionsInput[]
    createMany?: SubDirectionsCreateManyDirectionsInputEnvelope
    set?: SubDirectionsWhereUniqueInput | SubDirectionsWhereUniqueInput[]
    disconnect?: SubDirectionsWhereUniqueInput | SubDirectionsWhereUniqueInput[]
    delete?: SubDirectionsWhereUniqueInput | SubDirectionsWhereUniqueInput[]
    connect?: SubDirectionsWhereUniqueInput | SubDirectionsWhereUniqueInput[]
    update?: SubDirectionsUpdateWithWhereUniqueWithoutDirectionsInput | SubDirectionsUpdateWithWhereUniqueWithoutDirectionsInput[]
    updateMany?: SubDirectionsUpdateManyWithWhereWithoutDirectionsInput | SubDirectionsUpdateManyWithWhereWithoutDirectionsInput[]
    deleteMany?: SubDirectionsScalarWhereInput | SubDirectionsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubDirectionsUncheckedUpdateManyWithoutDirectionsNestedInput = {
    create?: XOR<SubDirectionsCreateWithoutDirectionsInput, SubDirectionsUncheckedCreateWithoutDirectionsInput> | SubDirectionsCreateWithoutDirectionsInput[] | SubDirectionsUncheckedCreateWithoutDirectionsInput[]
    connectOrCreate?: SubDirectionsCreateOrConnectWithoutDirectionsInput | SubDirectionsCreateOrConnectWithoutDirectionsInput[]
    upsert?: SubDirectionsUpsertWithWhereUniqueWithoutDirectionsInput | SubDirectionsUpsertWithWhereUniqueWithoutDirectionsInput[]
    createMany?: SubDirectionsCreateManyDirectionsInputEnvelope
    set?: SubDirectionsWhereUniqueInput | SubDirectionsWhereUniqueInput[]
    disconnect?: SubDirectionsWhereUniqueInput | SubDirectionsWhereUniqueInput[]
    delete?: SubDirectionsWhereUniqueInput | SubDirectionsWhereUniqueInput[]
    connect?: SubDirectionsWhereUniqueInput | SubDirectionsWhereUniqueInput[]
    update?: SubDirectionsUpdateWithWhereUniqueWithoutDirectionsInput | SubDirectionsUpdateWithWhereUniqueWithoutDirectionsInput[]
    updateMany?: SubDirectionsUpdateManyWithWhereWithoutDirectionsInput | SubDirectionsUpdateManyWithWhereWithoutDirectionsInput[]
    deleteMany?: SubDirectionsScalarWhereInput | SubDirectionsScalarWhereInput[]
  }

  export type DirectionsCreateNestedOneWithoutSubDirectionsInput = {
    create?: XOR<DirectionsCreateWithoutSubDirectionsInput, DirectionsUncheckedCreateWithoutSubDirectionsInput>
    connectOrCreate?: DirectionsCreateOrConnectWithoutSubDirectionsInput
    connect?: DirectionsWhereUniqueInput
  }

  export type DirectionsUpdateOneRequiredWithoutSubDirectionsNestedInput = {
    create?: XOR<DirectionsCreateWithoutSubDirectionsInput, DirectionsUncheckedCreateWithoutSubDirectionsInput>
    connectOrCreate?: DirectionsCreateOrConnectWithoutSubDirectionsInput
    upsert?: DirectionsUpsertWithoutSubDirectionsInput
    connect?: DirectionsWhereUniqueInput
    update?: XOR<XOR<DirectionsUpdateToOneWithWhereWithoutSubDirectionsInput, DirectionsUpdateWithoutSubDirectionsInput>, DirectionsUncheckedUpdateWithoutSubDirectionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SubDirectionsCreateWithoutDirectionsInput = {
    name: string
    additionalInfo: string
    examplelink: string
    additionallink: string
    validationField: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubDirectionsUncheckedCreateWithoutDirectionsInput = {
    id?: number
    name: string
    additionalInfo: string
    examplelink: string
    additionallink: string
    validationField: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubDirectionsCreateOrConnectWithoutDirectionsInput = {
    where: SubDirectionsWhereUniqueInput
    create: XOR<SubDirectionsCreateWithoutDirectionsInput, SubDirectionsUncheckedCreateWithoutDirectionsInput>
  }

  export type SubDirectionsCreateManyDirectionsInputEnvelope = {
    data: SubDirectionsCreateManyDirectionsInput | SubDirectionsCreateManyDirectionsInput[]
    skipDuplicates?: boolean
  }

  export type SubDirectionsUpsertWithWhereUniqueWithoutDirectionsInput = {
    where: SubDirectionsWhereUniqueInput
    update: XOR<SubDirectionsUpdateWithoutDirectionsInput, SubDirectionsUncheckedUpdateWithoutDirectionsInput>
    create: XOR<SubDirectionsCreateWithoutDirectionsInput, SubDirectionsUncheckedCreateWithoutDirectionsInput>
  }

  export type SubDirectionsUpdateWithWhereUniqueWithoutDirectionsInput = {
    where: SubDirectionsWhereUniqueInput
    data: XOR<SubDirectionsUpdateWithoutDirectionsInput, SubDirectionsUncheckedUpdateWithoutDirectionsInput>
  }

  export type SubDirectionsUpdateManyWithWhereWithoutDirectionsInput = {
    where: SubDirectionsScalarWhereInput
    data: XOR<SubDirectionsUpdateManyMutationInput, SubDirectionsUncheckedUpdateManyWithoutDirectionsInput>
  }

  export type SubDirectionsScalarWhereInput = {
    AND?: SubDirectionsScalarWhereInput | SubDirectionsScalarWhereInput[]
    OR?: SubDirectionsScalarWhereInput[]
    NOT?: SubDirectionsScalarWhereInput | SubDirectionsScalarWhereInput[]
    id?: IntFilter<"SubDirections"> | number
    name?: StringFilter<"SubDirections"> | string
    additionalInfo?: StringFilter<"SubDirections"> | string
    examplelink?: StringFilter<"SubDirections"> | string
    additionallink?: StringFilter<"SubDirections"> | string
    validationField?: StringFilter<"SubDirections"> | string
    directionId?: IntFilter<"SubDirections"> | number
    createdAt?: DateTimeFilter<"SubDirections"> | Date | string
    updatedAt?: DateTimeFilter<"SubDirections"> | Date | string
  }

  export type DirectionsCreateWithoutSubDirectionsInput = {
    name: string
    description: string
    professors?: DirectionsCreateprofessorsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectionsUncheckedCreateWithoutSubDirectionsInput = {
    id?: number
    name: string
    description: string
    professors?: DirectionsCreateprofessorsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectionsCreateOrConnectWithoutSubDirectionsInput = {
    where: DirectionsWhereUniqueInput
    create: XOR<DirectionsCreateWithoutSubDirectionsInput, DirectionsUncheckedCreateWithoutSubDirectionsInput>
  }

  export type DirectionsUpsertWithoutSubDirectionsInput = {
    update: XOR<DirectionsUpdateWithoutSubDirectionsInput, DirectionsUncheckedUpdateWithoutSubDirectionsInput>
    create: XOR<DirectionsCreateWithoutSubDirectionsInput, DirectionsUncheckedCreateWithoutSubDirectionsInput>
    where?: DirectionsWhereInput
  }

  export type DirectionsUpdateToOneWithWhereWithoutSubDirectionsInput = {
    where?: DirectionsWhereInput
    data: XOR<DirectionsUpdateWithoutSubDirectionsInput, DirectionsUncheckedUpdateWithoutSubDirectionsInput>
  }

  export type DirectionsUpdateWithoutSubDirectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    professors?: DirectionsUpdateprofessorsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectionsUncheckedUpdateWithoutSubDirectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    professors?: DirectionsUpdateprofessorsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubDirectionsCreateManyDirectionsInput = {
    id?: number
    name: string
    additionalInfo: string
    examplelink: string
    additionallink: string
    validationField: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubDirectionsUpdateWithoutDirectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    additionalInfo?: StringFieldUpdateOperationsInput | string
    examplelink?: StringFieldUpdateOperationsInput | string
    additionallink?: StringFieldUpdateOperationsInput | string
    validationField?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubDirectionsUncheckedUpdateWithoutDirectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    additionalInfo?: StringFieldUpdateOperationsInput | string
    examplelink?: StringFieldUpdateOperationsInput | string
    additionallink?: StringFieldUpdateOperationsInput | string
    validationField?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubDirectionsUncheckedUpdateManyWithoutDirectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    additionalInfo?: StringFieldUpdateOperationsInput | string
    examplelink?: StringFieldUpdateOperationsInput | string
    additionallink?: StringFieldUpdateOperationsInput | string
    validationField?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DirectionsCountOutputTypeDefaultArgs instead
     */
    export type DirectionsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DirectionsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DirectionsDefaultArgs instead
     */
    export type DirectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DirectionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubDirectionsDefaultArgs instead
     */
    export type SubDirectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubDirectionsDefaultArgs<ExtArgs>

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