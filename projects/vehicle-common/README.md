# VehicleCommon

This library was was aimed to provide common utils like validators, input components and pipe for formatting the license plate. But do to the time constraints: the mask feature (using the @ngneat/input-mask) and the splitting the app.component into smaller more managable components wasn't done.

Mask:
I haven't had the opportunity to use the @ngneat/input-mask package and not quite sure if correctly suits this project needs. But if the usage of this package failed I had a plan to implement similar functionality using FormControl `registerOnChange` and a custom form component implementing the ValueAssesor interface. It would take more time to implement correctly and I didn't use it in a long time. But I like this problem it makes a good recrutation task :)

Validator:
The `KentekenCheck` has a really strange usage interface, to validate you had to call the `formatLicense()` method and theres no `validate()`, strange, but to fix after reading the source code to confirm it does what it supposed to do.
