import { DetailCircle } from './DetailCircle';
import { Tchat } from './Tchat';
import { Calendar } from './Calendar';
import { Evenement } from './Evenement';
import { Aside } from './Aside';

export const CirclePage = () => {
    return (
        <>
            <DetailCircle />
            <Tchat />
            <Calendar />
            <Evenement />
            <Aside />
        </>
    )
}