<?php
    $name = $_GET['name'];
    $rating = $_GET['rating'];

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $feedback = $_POST['feedback'];
        if ($name != null && $rating != null && $feedback != null) {
            header("Location: handle-feedback.php?name=" . $name . "&rating=" . $rating . "&feedback=" . $feedback);
        }
    }
?>

<style>
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
    */

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
    display: block;
    }
    body {
    line-height: 1;
    }
    ol,
    ul {
    list-style: none;
    }
    blockquote,
    q {
    quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
    content: "";
    content: none;
    }
    table {
    border-collapse: collapse;
    border-spacing: 0;
    }

    /***** Font Awesome *****/

    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/fontawesome.min.css");

    /***** Allerta Font *****/

    @import url("https://fonts.googleapis.com/css2?family=Allerta&display=swap");

    /***** HooKnows Stylesheet *****/

    * {
    box-sizing: border-box;
    }

    :root {
    --primary: #11149a;
    --secondary: #ffcc00;
    --tertiary: #ff3300;
    }

    body {
    font-family: "Allerta", sans-serif;
    }

    .hk-content {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary);
    }

    [class^="hk-grid-"] {
    display: grid;
    grid-gap: 75px 75px;
    }

    .hk-grid-1x2 {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    }

    .hk-grid-2x2 {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    }

    @media only screen and (max-width: 600px) {
    [class^="hk-grid-"] {
        grid-gap: 50px 50px;
    }
    .hk-grid-1x2 {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
    }
    .hk-grid-2x2 {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, 1fr);
    }
    }

    .no-under {
    text-decoration: none;
    }

    /* 
        Button that raises up when hovered over.
        Inspiration taken from https://www.joshwcomeau.com/animation/3d-button/.
    */

    .hk-btn-hover {
    background-color: var(--secondary);
    border-radius: 10px;
    }

    .hk-btn-hover > div {
    height: 100%;
    width: 100%;
    color: var(--secondary);
    background-color: var(--primary);
    border: 5px solid var(--secondary);
    border-radius: 10px;
    transition: transform 0.2s;
    }

    .hk-btn-hover > div:hover {
    transform: translateY(-10px);
    }

    .hk-section-row {
    margin-top: 50px;
    }

    .display-none {
    display: none !important;
    }

    .blue-text {
    color: var(--primary);
    }


    .rate {
        margin: 0 0 50px 0;
    }
    .rate:not(:checked) > input {
        position: absolute;
        top: -9999px;
    }
    .rate:not(:checked) > label {
        height: 30px;
        width: 50px;
        text-align: center;
        padding: 0 5px;
        float: right;
        overflow: hidden;
        white-space: nowrap;
        cursor: pointer;
        font-size: 30px;
        color: #ccc;
    }

    .rate > input:checked ~ label {
        color: #ffc700;
    }
    .rate:not(:checked) > label:hover,
    .rate:not(:checked) > label:hover ~ label {
        color: #deb217;
    }
    .rate > input:checked + label:hover,
    .rate > input:checked + label:hover ~ label,
    .rate > input:checked ~ label:hover,
    .rate > input:checked ~ label:hover ~ label,
    .rate > label:hover ~ input:checked ~ label {
        color: #c59b08;
    }

    input {
        font-size: 20px;
        text-align: center;
        margin-bottom: 20px;
    }

    button, a {
        height: 50px;
        width: 120px;
        padding: 0;
        border: 0;
        background: var(--secondary);
        cursor: pointer;
        margin-bottom: 20px;
    }

    #feedbackForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    }

</style>



<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Hoo Knows?</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="author" content="Created by Austin Houck" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
  </head>
  <body>
    <div class="hk-content">
        <div style="padding: 50px 0">
            <div style="text-align: center; color: var(--secondary); font-size: 48px">
            Add Your Feedback!
            </div>

            <div style="margin-top: 50px">
            <form
                name="feedbackForm"
                id="feedbackForm"
                method="POST"
                novalidate
            >
                <div style="width: 100%; height: 100px;">
                    <textarea
                        style="text-align: center; resize: vertical; font-family: 'Allerta', sans-serif; width: 100%; height: 100%;"
                        placeholder="Enter Feedback"
                        name="feedback"
                        id="feedback"
                        autofocus
                        required
                    ></textarea>
                </div>
                <div style="width: 100%;">
                    <div style="display: flex; justify-content: space-evenly; width: 100%; padding-top: 50px;">
                        <a href="http://localhost:4200/" class="hk-btn-hover no-under">
                            <div>
                                <div
                                style="
                                    height: 100%;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    flex-direction: column;
                                "
                                >
                                <p style="font-size: 20px">Cancel</p>
                                </div>
                            </div>
                        </a>
                        <button type="submit" class="hk-btn-hover no-under">
                            <div>
                                <div
                                style="
                                    height: 100%;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    flex-direction: column;
                                "
                                >
                                <p style="font-size: 20px">Submit</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                
            </form>
            </div>
        </div>
    </div>
  </body>
</html>