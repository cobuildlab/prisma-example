import { Prisma } from '@prisma/client';

export const PATIENT_INDEX = (): Prisma.Sql => Prisma.sql`
SELECT 
    UPPER(SUBSTRING ( "lastName" ,1 , 1 )) as letter, 
    COUNT(id) as "count" 
FROM 
    public."Patient"
GROUP BY 
    UPPER(SUBSTRING ( "lastName" ,1 , 1 ))
`;

export const PATIENT_INDEX_WITH_HINT = (hint: string): Prisma.Sql => Prisma.sql`
SELECT 
    UPPER(SUBSTRING ( "lastName" ,1 , 1 )) as letter, 
    COUNT(id) as "count" 
FROM 
    public."Patient"
WHERE 
    "firstName" LIKE ${'%' + hint + '%'}
    OR "middleName" LIKE ${'%' + hint + '%'}
    OR "lastName" LIKE ${'%' + hint + '%'}
GROUP BY 
    UPPER(SUBSTRING ( "lastName" ,1 , 1 ))
`;

export const PATIENT_INDEX_WITH_LEXEME = (lexeme: string): Prisma.Sql => Prisma.sql`
SELECT 
    UPPER(SUBSTRING ( "lastName" ,1 , 1 )) as letter, 
    COUNT(id) as "count" 
FROM 
    public."Patient"
WHERE 
    "fullText" @@ to_tsquery(${lexeme})
GROUP BY 
    UPPER(SUBSTRING ( "lastName" ,1 , 1 ))
`;
