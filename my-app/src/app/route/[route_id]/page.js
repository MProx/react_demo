import { notFound } from "next/navigation";

export default function Profile({ params }) {

    if (isNaN(parseInt(params.route_id)) || params.route_id > 50) {
        notFound();
    }

    return <h1>Sub-route for route/{parseInt(params.route_id)}</h1>
}

