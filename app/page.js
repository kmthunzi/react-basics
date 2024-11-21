import LikeButton from './like-button';

    function Header({title}) {
    console.log(title);
    return<h1>{title ? title : "Katlego's Defualt Title"}</h1>;
    }


    export default function HomePage() {
    
        const names = ['Darth Vader','Ännikin Skywalker', 'Jack The Ripper', 'Jean Claude van Damme']



        return (
            <div>
                <Header title="React" />
                <Header title="A new title!" />
                <Header />

                <ul>
                    {names.map((name) => (
                        <li key={name}>{name}</li>
                    ))}
                </ul>
                <LikeButton />

            </div>
        );
    }

