# VehicleStore

This library is provided to minimalise the public api to a minimum.

It provides:

- `VehicleFormService` with creates the form with necessary validators and fields
- `VehicleStoreFacade` that provides the store functionality without exposing the store implementation, it provides the image, typeOptions and subTypeOptions as observables, and a changeType method that updates the image based on provided type. I hesitated where to attach the valueChanges for the type, inside the VehicleFormService or the AppComponent - but do to the subscription hanging I chose the AppComponent to catch the potential memory leak.
- `VehicleService` - is a private (internal) service that provides an observable with necessary select options so it could be replaced by a API call if needed

Comments to the store:
Bundling together actions, effects or reducers inside a folder end exporting them via a index.ts is a habit as it easier when a store has multiple sub-store keys and the functionality stills follows the Domain Driven Design.
