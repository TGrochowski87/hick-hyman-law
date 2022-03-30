// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    label: string;
    backgroundColor: string;
    fontColor: string;
  }

  export interface ColorBlockData {
    count: number;
  }
}
