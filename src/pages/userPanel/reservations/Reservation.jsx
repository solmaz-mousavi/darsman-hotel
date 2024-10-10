import React from "react";
import {
  useGetRoomReservationsQuery,
  useDeleteRoomReservationMutation,
} from "../../../app/services/roomReservationApi";
import { useGetRoomsQuery } from "../../../app/services/roomApi";
import { filterByID, filterByName } from "../../../filterMethods";
import swal from "sweetalert";
import TableTop from "../../../components/tableTop/TableTop";
import Pagination from "../../../components/pagination/Pagination";
import CircleSpinner from "../../../components/loader/CircleSpinner";
import { MdCancel , MdErrorOutline } from "react-icons/md";

export default function Reservation({selectedUser}) {
    const {id} = selectedUser;
  const { data: roomReservations, isLoading, error, isError } = useGetRoomReservationsQuery();
  const [deleteRoomReservation] = useDeleteRoomReservationMutation();
  const { data: rooms } = useGetRoomsQuery();

// room reservations:
  const deleteHandler1 = async (roomReservationID) => {
    swal({
      text: "آیا از حذف آیتم اطمینان دارید؟",
      buttons: ["خیر", "بله"],
    }).then((res) => {
      if (res) {
        deleteRoomReservation(roomReservationID);
      }
    });
  };

  const title1 = ["تاریخ", "شماره اتاق"];

  let body1 = [];
if(roomReservations && rooms) {
    const filteredRoomReservation = filterByName(roomReservations, "userID", id);
    filteredRoomReservation.forEach((roomReservation) => {
        const room = filterByID(rooms, roomReservation.roomID);
        let newItem = {
          tableData: [
            roomReservation.date,
            room[0].roomNumber,
          ],
          payload: roomReservation,
        };
        body1 = [...body1, newItem];
      });
    }
  const actions1 = [
    {
      icon: <MdCancel />,
      tooltip: "ابطال سفارش",
      method: deleteHandler1,
      class: "btn-red",
    },
  ];

  if (isLoading) {
    return <CircleSpinner />;
  };

  if (isError) {
    return (
      <div className="error">
        <MdErrorOutline />
        <p>{error.error}</p>
      </div>
    );
  };

  if (roomReservations ) {
    return (
      <div>
        <TableTop
          title='لیست سفارشات اتاق شما از هتل درسمن'
          addRoute="roomSearch"
        />
        {/* <h2>لیست سفارشات اتاق شما از هتل درسمن</h2> */}
        <Pagination title={title1} body={body1} actions={actions1} />

        {/* <TableTop
          title='لیست سفارشات غذای شما از رستوران هتل درسمن'
          addRoute="foodSearch"
        />
        <Pagination title={title2} body={body2} actions={actions2} /> */}
      </div>
    );
  }
}
