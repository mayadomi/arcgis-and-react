import getPlaceData from "../../data/getCurrentData.json";
import './tableView.css'

type Props = {
    selectedPlace: string,
    setSelectedPlace: (val: string) => void
}

export const TableComponent: React.FC<Props> = ({ selectedPlace, setSelectedPlace }) => {
    {
        return (
            <div className="tableView">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getPlaceData.data.placeOverviewItems.map((place, index) => {
                            return (
                                <tr key={index} onClick={() => setSelectedPlace(place.placeName)} style={{ color: selectedPlace === place.placeName ? "blue" : "black" }}>
                                    <td>{place.placeName}</td>
                                </tr>
                            )
                        })}</tbody>
                </table>
            </div>
        )
    }
}

export default TableComponent