import Link from 'next/link'
import PocketBase from 'pocketbase'
import "./notes.css";

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

async function getNotes() {

    // const db = new PocketBase('http://127.0.0.1:8090');
    // const data = await db.collection('notes').getList();

    //another way to get data from DB:
    const res = await fetch("http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
        { cache: 'no-store' }   // so that next doesn't cache this route
    );
    const data = await res.json();
    return data?.items;
}


export default async function NotesPage() {
    const notes = await getNotes();

    return(
        <div>
            <h1>Notes</h1>
            <div >
                { 
                notes?.map(note => {return <Note key={note.id} note={note} />})
                }
            </div>

        </div>
    )
}

function Note({note}) {
    const {id, title, content, created } = note || {};

    return (
        <Link href={`/notes/${id}`}>
            <div className='note' >
                <h2>{title}</h2>
                <h5>{content}  </h5>
                <p>{created} </p>
            </div>

        </Link>
    )


}