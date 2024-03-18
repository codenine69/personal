import { Request, Response } from "express";
import { RequestHandler } from "express";
import bcrypt from "bcrypt";




//?  AUTH
//? ************************************************************************************/
export const getAllPersonal = async (req: Request, res: Response) => {
  try {
  
    return res.status(201).json({
      msj: Date.now(),
      per: "nina",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msj: "Error: server 😕 ❗️❗️", err });
  }
};

//? CREATE ONE PERSONAL
//? ************************************************************************************/
// export const createPersonal = async (req: Request, res: Response) => {
//   try {
//     const pass = await bcrypt.hash(req.body.PASSWORD_V, 10);

//     const personal = await prisma.personal.create({
//       data: {
//         ID_DNI_C: req.body.ID_DNI_C,
//         CIP_C: req.body.CIP_C,
//         AP_PATERNO_V: req.body.AP_PATERNO_V,
//         AP_MATERNO_V: req.body.AP_MATERNO_V,
//         NOMBRE_V: req.body.NOMBRE_V,
//         PASSWORD_V: pass,
//         SECRET_PASS_V: req.body.SECRET_PASS_V,
//         ESTADO_B: req.body.ESTADO_B,
//         FECHA_NAC_D: req.body.FECHA_NAC_D,
//         FOTO_V: req.body.FOTO_V,
//         DOMIC_I: req.body.DOMIC_I,
//         CELULAR_V: req.body.CELULAR_V,
//         GRADO_ID_I: Number(req.body.GRADO_ID_I),
//         ESPECIALIDAD_ID_I: Number(req.body.ESPECIALIDAD_ID_I),
//       },
//     });
//     return res.json({ msj: "Personal created success 😃 ✔️", personal });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ msj: "Error: server 😕 ❗️❗️", err });
//   }
// };
