# Angular Code Challenge

# Word from the author

I've created two libs (links to respectable README's): [vehicle-store](./projects/vehicle-store/README.md) and [vehicle-common](./projects/vehicle-common/README.md) for this task. But didn't had the time to finish the mask functionality for the license plate


Great to see that you are interested in working with us! We work with a large group of developers on the websites of Centraal Beheer, Interpolis, FBTO and Avero every day. We would really like to expand this group of developers.

## What is the Code Challenge?
The Code Challenge is an accessible front-end assignment where you build a number of new functionalities for an example application. We review your code and if we like your solution, we would like to invite you for a first introductory meeting.

## The Challenge
We work with forms a lot. Example forms include forms where people can report damages to make a claim and to take out a new insurance policy.

These forms are often built in Angular. 

In this Code Challenge you will work on an example form. The styling and html are already done but we are still missing some functionality. We will be using Tailwind https://tailwindcss.com/ for this challenge. 

![Screenshot](screenshot.png)

### Requirements:
Finish the example form (see src/app/app.component.html for the existing html). We expect your application to contain at least (part of) the following requirements:

Functionalities:
- The user must be able to select the type of vehicle
    - Possible choices:
        - auto
        - motor
        - scooter
- The image to the right of the form should change based on the user's choice. The following combinations are possible:
    - auto: assets/auto.jpg
    - motor: assets/motor.jpg
    - scooter: assets/scooter.jpg     
- The user must be able to choose the subtype of the vehicle.
    - Possible subtypes for vehicle _auto_
        - Hatchback
        - Sedan
        - Station
        - Cabriolet
        - Coupé
        - Multi Purpose Vehicle (MVP)
        - Terreinauto
    - Possible subtypes for vehicle _motor_:
        - All-road
        - Naked
        - Enduro
        - Race
        - Toermotor
        - Chopper
        - Zijspan
    - Possible subtypes for vehicle _scooter_:
        - For _scooters_, the user cannot choose a subtype
- Implement license plate formatting as follows:
    - Insert a dash between the numbers and letters of the license plate. AA14BB then becomes AA-14-BB
    - For letter combinations of 4 characters: insert a dash after 2 characters. 12AABB then becomes 12-AA-BB
- Implement basic license plate validation:
    - Use the following library to implement license plate validation: https://www.npmjs.com/package/rdw-kenteken-check
    - Is the entered value invalid? Then show the following error message (on-blur of the field): "Helaas is het ingevoerde kenteken niet geldig. Probeer het opnieuw." 

### Technical requirements:
- Split the html into logical Angular components
- Use Angular Reactive forms to build your form
- Use NgRx to manage the data in the state and incorporate some effects

## Conditions
- To keep the challenge on a level playing field for all candidates, we expect you to spend no more than at minimum 2 and at maximum 4 hours on the challenge. Not finished with all requirements after 4 hours? No problem, just send in what you have. We find quality and an eye for details much more important than that you have realized all the requirements.
- Fork this Github to your own Github account and push your solution. Send us a link of your solution.

