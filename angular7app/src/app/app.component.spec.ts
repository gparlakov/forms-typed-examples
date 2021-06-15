/**
 *  CUSTOM TEMPLATE
 *
 *  AVAILABLE PROPERTIES:
 *
 *  params: {importPath: string, type: string} 
 *  specFileName: app.component.spec.ts
 *  normalizedName: app.component
 *  normalizedName: app.component
 *  className: AppComponent
 *  publicMethods: ngOnInit
 *  declaration: 
 *  builderExports: 
 *  constructorParams: 
 *  shorthand: a
 *
 *
 *
 *
 */
import { AppComponent } from './app.component';
import { autoSpy } from 'autoSpy';

describe('AppComponent', () => {
  it('when ngOnInit is called it should', () => {
    // arrange
    const { build } = setup().default();
    const a = build();
    // act
    a.ngOnInit();
    // assert
    // expect(a).toEqual
  });
  
});

// tslint-disable-type
function setup() {
  const builder = {
    default() {
      return builder;
    },
    build() {
      return new AppComponent();
    }
  };

  return builder;
}
