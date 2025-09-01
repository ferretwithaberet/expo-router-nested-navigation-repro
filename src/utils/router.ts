import {
  Href,
  UnknownOutputParams,
  useGlobalSearchParams,
  useLocalSearchParams,
} from "expo-router";
import * as z from "zod";

export type HrefPathname = Exclude<Href, string>["pathname"];

const stringifyJSON = (value: unknown) =>
  value != null ? JSON.stringify(value) : undefined;
const paramsSerializeSchema = z.record(
  z.string(),
  z.unknown().transform(stringifyJSON)
);

const parseJSON = (value: string) => {
  try {
    return JSON.parse(value);
  } catch (_error) {
    return value;
  }
};
const paramsDeserializeSchema = z.record(
  z.string(),
  z.string().transform(parseJSON)
);

export const serializeQueryParams = <TParams extends Record<string, unknown>>(
  params: TParams
) => {
  return paramsSerializeSchema.parse(params) as {
    [key in keyof TParams]: string;
  };
};

export const parseParams = <TSchema extends z.ZodObject>(
  schema: TSchema,
  params: UnknownOutputParams
) => {
  // Remove expo-router internal params
  const {
    initial: _initial,
    path: _path,
    pop: _pop,
    state: _state,
    params: _params,
    screen: _screen,
    ...restParams
  } = params;

  const parsedParams = paramsDeserializeSchema.parse(restParams);
  return schema.parse(parsedParams);
};

export const useParsedLocalParams = <TSchema extends z.ZodObject>(
  schema: TSchema
) => {
  const params = useLocalSearchParams();
  return parseParams(schema, params);
};

export const useParsedGlobalParams = <TSchema extends z.ZodObject>(
  schema: TSchema
) => {
  const params = useGlobalSearchParams();
  return parseParams(schema, params);
};
