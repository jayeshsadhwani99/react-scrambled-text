## React Scrambled Text

![demo gif](https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-yW_DcXe2pFAlmoOQWHYEPdJOO34eM8ykTcsizD_0E6MgF9CdfghxA4guSw1OJ9SqRdfMg04pV-KRLCsrcrZixjjov8Ew=w2880-h1586)

This is a package to create scrambled text animation in react easily. A lightweight package which you just install once and are ready to go

## How to install

```
npm install react-scrambled-text
```

or

```
yarn add react-scrambled-text
```

## Usage

Once Installed, you can just import it in your own component and start using it.

Import it using:

```(js)
import ScrambledAnimation from 'react-scrambled-text'
```

And you can use it like this:

```(js)
<ScrambleAnimation
    texts={["hello", "world"]}
    speed={100}
    pauseDuration={2000}
    start={true}
/>
```

## Props

<table>
    <thead>
        <tr>
            <th>Prop Name</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>texts</td>
            <td>
            multiple texts that are gonna be rendered on the screen after being scrambled
            </td>
            <td>Array</td>
            <td>["Hello, World!"]</td>
        </tr>
        <tr>
            <td>speed</td>
            <td>
            the speed at which each letter of the text unscrambles(in milliseconds)
            </td>
            <td>Number</td>
            <td>100</td>
        </tr>
        <tr>
            <td>pauseDuration</td>
            <td>
            duration between the scrambling of two different texts in milliseconds
            </td>
            <td>Number</td>
            <td>3000</td>
        </tr>
        <tr>
            <td>start</td>
            <td>
            the variable that controls if the animation will play or not
            </td>
            <td>Boolean</td>
            <td>true</td>
        </tr>
        <tr>
            <td>style</td>
            <td>
            custom styles that you might wanna add to the text being rendered on the screen
            </td>
            <td>React.CSSProperties</td>
            <td>null</td>
        </tr>
        <tr>
            <td>className</td>
            <td>
            custom className you might wanna give to the text being rendered
            </td>
            <td>string</td>
            <td>null</td>
        </tr>
    </tbody>
</table>
