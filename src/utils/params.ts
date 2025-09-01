import * as z from "zod";

export const ParamsSchema = z.object({
  tenantId: z.int(),
  role: z.string(),
  queryParam: z.string().optional(),
});
