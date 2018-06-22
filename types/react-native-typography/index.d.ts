interface IiOSUIKit {
  largeTitleEmphasized: object;
  title3Emphasized: object;
  title3: object;
  bodyEmphasized: object;
  body: object;
  subhead: object;
  subheadShort: object;
  subheadEmphasized: object;
  footnote: object;
  footnoteEmphasized: object;
  callout: object;
  caption2: object;
  caption2Emphasized: object;
  largeTitleEmphasizedWhite: object;
  title3EmphasizedWhite: object;
  title3White: object;
  bodyEmphasizedWhite: object;
  bodyWhite: object;
  subheadWhite: object;
  subheadShortWhite: object;
  subheadEmphasizedWhite: object;
  footnoteWhite: object;
  footnoteEmphasizedWhite: object;
  calloutWhite: object;
  caption2White: object;
  caption2EmphasizedWhite: object;
}
// I don't know how to properly make types lmao
declare module "react-native-typography" {
  import * as RNT from "react-native-typography";
  export const iOSUIKit: IiOSUIKit = RNT.iOSUIKit;
  export default RNT;
}
