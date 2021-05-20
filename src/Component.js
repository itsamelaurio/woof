import React from 'react'

export default function Component() {

    $.ajax({
        url: `https://api.thedogapi.com/v1/images/search`,
        data: {
            "x-api-key": "30777f0e-7f95-4c79-b4b3-b657b6bdd296",
        },
        dataType: "JSON"
    }).done(function (data) {
        console.log(data);
    })


    return (
        <div>

        </div>
    )
}
