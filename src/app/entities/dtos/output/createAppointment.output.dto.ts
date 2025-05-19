import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';

extendZodWithOpenApi(z);

export const CreateAppointmentOutputDTOSchema = z
  .object({
    id: z.string().openapi({
      description: 'Unique ID of the appointment',
      example: 'C202335563796',
    }),
    episodeId: z.string().optional().openapi({
      description: 'Unique episode ID of the appointment',
      example: 'C23CLIRP35563796',
    }),
    date: z.string().optional().openapi({
      description: 'Appointment schedule date in DD-MM-YYYY HH:mm:ss',
      example: '01-01-2025 00:00:00',
    }),
    mode: z.string().optional().openapi({
      description: 'Appointment mode',
      example: 'Presencial',
    }),
    status: z.number().optional().openapi({
      description: 'Appointment status, either 1 2 or 3. By default 1 is sent',
      example: 1,
    }),
    doctor: z
      .object({
        id: z.string().openapi({
          description: 'Unique ID of the doctor',
          example: '70358611',
        }),
        name: z.string().openapi({
          description: 'Name of the doctor',
          example: 'MARÍA DEL CARMEN PA JA',
        }),
      })
      .optional()
      .openapi({
        description: 'Doctor model',
      }),
    specialty: z
      .object({
        id: z.string().openapi({
          description: 'Unique ID of the specialty',
          example: '2600',
        }),
        groupId: z.string().openapi({
          description: 'Unique group ID of the specialty',
          example: '26',
        }),
        name: z.string().openapi({
          description: 'Name of the specialty',
          example: 'Cardiologia',
        }),
      })
      .optional()
      .openapi({
        description: 'Specialty model',
      }),
    insurance: z
      .object({
        id: z.string().openapi({
          description: 'Unique ID of the insurance',
          example: '16260',
        }),
        inspectionId: z.string().openapi({
          description: 'Unique Inspection ID of the insurance',
          example: '99',
        }),
      })
      .optional()
      .openapi({
        description: 'insurance model',
      }),
    appointmentType: z
      .object({
        id: z.string().openapi({
          description: 'Unique ID of the appointment type',
          example: '3300-10010942',
        }),
        name: z.string().openapi({
          description: 'Name of the appointment type',
          example: 'CONSULTA NO PRESENCIAL',
        }),
      })
      .optional()
      .openapi({
        description: 'Appointment type model',
      }),
    recommendations: z.array(z.string()).openapi({
      description: 'List of recommendations for the appointment',
      example: ['recomendacion'],
    }),
    canCancel: z.boolean().optional().openapi({
      description: 'The appointment can be canceled',
      example: false,
    }),
    canReprogram: z.boolean().optional().openapi({
      description: 'The appointment can be reprogrammed',
      example: false,
    }),
    didShow: z.boolean().optional().openapi({
      description: 'Did the patient went to the appointment',
      example: false,
    }),
  })
  .strict()
  .openapi({
    description: 'Patient Appointment Response Body',
  });

export type CreateAppointmentOutputDTO = z.infer<typeof CreateAppointmentOutputDTOSchema>;
