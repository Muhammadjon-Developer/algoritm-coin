import {Router} from 'express'
import {createMentor, updateMentor, patchMentor, deleteMentor, getMentors} from '../controllers/mentor.controller.mjs'
import {createValidationSchema, updateValidationSchema} from '../utils/validationSchemas.mjs'
import { checkSchema}  from 'express-validator'

const router = Router();

router.get('/mentors', getMentors)

router.post('/create-mentor', checkSchema.create(createValidationSchema), createMentor)

router.put('/mentors/:id', checkShema(updateValidationSchema), updateMentor)

router.patch('/mentors/:id', checkShema(updateValidationSchema), patchMentor)

router.delete('/mentors/:id', deleteMentor)

export default router;