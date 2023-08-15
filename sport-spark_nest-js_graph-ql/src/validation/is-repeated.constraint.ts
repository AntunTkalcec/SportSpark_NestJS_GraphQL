import {
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';

export function IsRepeated(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isRepeated',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, { object }: ValidationArguments) {
          if (!object.hasOwnProperty(property)) {
            return false;
          }

          return value === object[property];
        },
        defaultMessage(): string {
          return `${
            propertyName.charAt(0).toUpperCase() + propertyName.slice(1)
          } needs to be identical to ${property}`;
        },
      },
    });
  };
}
