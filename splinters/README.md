# CS19 Splinter Session Webpage Template

The Cambridge Workship on Cool Stars, Stellar Systems, and the Sun ("Cool Stars")
has a strong tradition of supporting independently organized parallel sessions
throughout the course of the workshop ("splinter sessions"). Cool Stars 19 in
Uppsala will not be an exception. To provide the best possible experience for
attendees of the Workshop and individual splinter sessions, we require that
splinter sessions compose a dedicated webpage with all pertinent information
about the session (date, motivation, speakers, schedule, etc).

Making a webpage from scratch can take a lot of time, as we can attest. To help
relieve effort on our part and the part of individual splinter organizers, we use
the Foundation 5 front end and provide this template. An added benefit is that
this allows us to homogenize the look and feel of events surrounding
Cool Stars 19. Below is some basic information on [Foundation 5](http://foundation.zurb.com/),
information about where to host your splinter webpage, and instructions on what
to change in the template, with highlights of a few particular features.  

### About Foundation 5

Foundation is a widely-used framework to build responsive and mobile-friendly
websites (used among others by Mozilla, the Washington Post, National Geographic).
We use Foundation 5 to serve the users and CS19 attendees a fast website, built
around modern standards, and that scales smoothly from large displays workstations
to smartphones. Foundation 5 provides a set of building blocks or components that are ready to use.
We use some of them in this template, which will be described below. More information
on the building blocks can be found on [Foundation 5 website](http://foundation.zurb.com/docs/)


### Where to Host

Where to host your splinter webpage is up to you, but there are really only
two options. First, you can host it on your institutes web server. Check with
your local IT department if you prefer this option. Second, we are happy to
host your splinter session webpage on our server along with the core of the
Cool Stars 19 webpage.

We recommend the latter option for purposes of longevity. The Cool Stars 19
web server will remain accessible for an indefinite period of time after the
conference. Therefore, splinter session pages that we host and information will
be archived and preserved for future reference.

### Using our Template

To use our template, first [fork the main CS19 webpage repository](https://help.github.com/articles/fork-a-repo/).
Next, in the `splinters/` directory, make a copy of the `template/` directory and give it a name associated with 
your proposed splinter session. From the top level directory,
```
cd splinters/
cp -r template/ my_splinter/
```
Now edit the `index.html` file to suit your purposes. Some of the more useful features of Foundation 5
are described below. 

Once your splinter session webpage is acceptable, [create a pull request](https://help.github.com/articles/creating-a-pull-request/) to merge your forked repository with
the main Cool Stars 19 repository. We'll confirm that everything is compatible and that no changes to the main
Cool Stars 19 webpage were made. Then you're all set! Continue to edit and create pull requests as information
about your splinter session evolves.

## Usage
We designed this template so that you - as a splinter organizer - can have your
webpage running in a minimum amount of time. If you are happy with the template,
and just want to replace the placeholders with actual information, then the task
is simple: open the template file `index.html` and search for all the occurences
of "TO-DO:" in the file. There you will find comments that explains you what needs
to be done. If you want to tweak a little bit the
template, you'll find below some details about the Foundation 5 components that
we used in this template.

### Foundation grid layout
Foundation is using a [grid layout](http://foundation.zurb.com/docs/components/grid.html),
with so-called rows and columns. When you want to add an element to the webpage,
you create a row elements `<div class="row"></div>` which is a horizontal block,
meant to contain columns. The grid is divided into 12 units, which means that a
12-unit column `<div class="small-12 columns"></div>` will fill all the row, a 6-unit column will fill half the row.
To allow the content to be scaled and re-arranged across different screen size,
you can change the width of your column as a function of screen size. Foundation
has 3 different classes for screen-size: small, medium, and large. Moreover, the
small screens have priority, so if your column has a 12-unit size for small screen,
it will be as well for large screens.

Example: Two articles that should be side by side on medium and large screens (each
article takes half of the screen), and that should re-arranged so that each article
takes the full-width for small screens (the two articles are one below the other).

```html  
<div class="row">
  <div class="small-12 medium-6 columns">
    <p>
      This is article 1. I will not fill it with Lorem Ipsum
    </p>
  </div>
  <div class="small-12 medium-6 columns">
    <p>
      This is article 2. I will not fill it with Lorem Ipsum
      </p>
  </div>
</div>
```



### Accordion
[Accordion](http://foundation.zurb.com/docs/components/accordion.html)
is the component we use in the __Program__ section of the template,
which reveals an abstract at a time when you click on a talk. If you click on
another talk in the program, its abstract will be revealed, and the previous abstract
will then be hidden. We used this functionality so that the reader is not overwhelmed
by hundreds of lines of abstract at the same time. The user can just click on the
interesting talks, and see its abstract.

### Interchange
[Interchange](http://foundation.zurb.com/docs/components/interchange.html)
is a feature that will load different type of content for different
sizes of screen. We use interchange in this template to display a simple text list
of invited speakers for small screens, and a fancy circular photo with affiliations
for medium- and large- sized devices.

<img height="400px" src="http://www.astro.uu.se/~alavail/misc/interchange_small.png">
<img height="400px" src="http://www.astro.uu.se/~alavail/misc/interchange_medium.png">

A default text is specified in case
javascript is not allowed to run. Below is the code snippet

```html
<div class="row">
  <div class="small-12 columns">
    <h3>
      Invited speakers
    </h3>
    <div data-interchange="[small.html, (default)], [medium.html, (medium)]">
      <ul>
        <li>Greg Feiden (Unseen University)</li>
        <li>Alexis Lavail (Ministry of Love)</li>
      </ul>
    </div>
  </div>
</div>
```
For small screens, the content from "small.html" is loaded, for medium screens and large
screens, "medium.html" is loaded. In case scripts are not allowed to run, the html
within
```html
<div data-interchange="[small.html, (default)], [medium.html, (medium)]"></div>
```
 is displayed. Feel free to change the type of information you want to display.
 If you do not want to use interchange, and display the same content for any device,
 simply remove the outer
 ```html
 <div data-interchange="[small.html, (default)], [medium.html, (medium)]"></div>
 ```
element. Please keep in mind that a large number of people will access this webpage
with mobiles devices and tablets. Therefore, you should avoid loading heavy, and/or
large material on small screens.

## Authors

[Alexis Lavail](https://github.com/astro-alexis)

[Gregory Feiden](https://github.com/gfeiden)

### Contact

[Cool Stars 19 LOC](mailto:cs19@physics.uu.se)
