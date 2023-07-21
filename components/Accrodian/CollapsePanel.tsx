import { Collapse } from "antd";
import { TbMessage2 } from "react-icons/tb";
import Status from "../Status";

const { Panel } = Collapse;
export default function CollapsePanel() {
  let reservationData = [
    {
      url: "https://img.etimg.com/thumb/msid-96836017,width-1200,height-900,imgsize-120772,resizemode-8,quality-100/prime/corporate-governance/from-marriotts-to-hyatts-to-le-mridiens-premium-hotel-assets-are-stuck-at-bankruptcy-courts.jpg",
      address: " 1509 Emil St, Madison, WI 53713, United States",
      title: "Swimming Pool",
      date: {
        startDate: "Jan 6, 2023",
        startTime: "09:00 AM",
        endDate: "Jan 6, 2023",
        endTime: "10:00 PM",
      },
      status: "success",
      revenue: "1000",
    },
    {
      url: "https://img.etimg.com/thumb/msid-96836017,width-1200,height-900,imgsize-120772,resizemode-8,quality-100/prime/corporate-governance/from-marriotts-to-hyatts-to-le-mridiens-premium-hotel-assets-are-stuck-at-bankruptcy-courts.jpg",
      address: " 1509 Emil St, Madison, WI 53713, United States",
      title: "Swimming Pool",
      date: {
        startDate: "Jan 6, 2023",
        startTime: "09:00 AM",
        endDate: "Jan 6, 2023",
        endTime: "10:00 PM",
      },
      status: "failed",
      revenue: "1000",
    },
    {
      url: "https://img.etimg.com/thumb/msid-96836017,width-1200,height-900,imgsize-120772,resizemode-8,quality-100/prime/corporate-governance/from-marriotts-to-hyatts-to-le-mridiens-premium-hotel-assets-are-stuck-at-bankruptcy-courts.jpg",
      address: " 1509 Emil St, Madison, WI 53713, United States",
      title: "Swimming Pool",
      date: {
        startDate: "Jan 6, 2023",
        startTime: "09:00 AM",
        endDate: "Jan 6, 2023",
        endTime: "10:00 PM",
      },
      status: "pending",
      revenue: "1000",
    },
  ];
  let todoData = [
    {
      taskName: "Send Lease Renewal Notice",
      propertyName: "Pavillion Village",
      amenityName: "Swimming pool",
      dueDate: "15 Jan 2023",
      status: "pending",
      delegate: "self",
    },
    {
      taskName: "Send Lease Renewal Notice",
      propertyName: "Pavillion Village",
      amenityName: "Swimming pool",
      dueDate: "15 Jan 2023",
      status: "failed",
      delegate: "self",
    },
    {
      taskName: "Send Lease Renewal Notice",
      propertyName: "Pavillion Village",
      amenityName: "Swimming pool",
      dueDate: "15 Jan 2023",
      status: "success",
      delegate: "self",
    },
  ];
  let amenitiesData = [
    {
      amenity: "Swimming pool",
      propertyName: "Pavillion Village",
      price: "100",
      deposite: "100",
      availability: "50",
      delegate: "None",
    },
    {
      amenity: "Swimming pool",
      propertyName: "Pavillion Village",
      price: "100",
      deposite: "100",
      availability: "50",
      delegate: "None",
    },
    {
      amenity: "Swimming pool",
      propertyName: "Pavillion Village",
      price: "100",
      deposite: "100",
      availability: "50",
      delegate: "None",
    },
  ];
  return (
    <Collapse
      defaultActiveKey={["1"]}
      accordion
      expandIconPosition="end"
      bordered={false}
      style={{ display: "flex", flexDirection: "column", position: "relative" }}
    >
      <Panel
        header={
          <>
            <div className="flex justify-between items-center ">
              <span className="font-bold text-gray-700">Reservation</span>
              <span className="text-semibold text-[#ACC2DB] text-xl">03</span>
            </div>
          </>
        }
        key="Reservation"
        showArrow={false}
        style={{
          background: "white",
          borderRadius: "10px",
          border: "none",
        }}
      >
        <div className="relative overflow-x-auto w-full w-5xl  ">
          <table className=" min-w-[1000px]  w-full  text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
            <tbody className="w-full  ">
              {reservationData.map((reservation, index) => (
                <tr
                  className="bg-white border-b-2  hover:bg-gray-50 border-[#FAB815] "
                  key={index}
                >
                  <td className="flex items-center px-6 py-4 text-gray-900 ">
                    <img
                      className="w-[60px] h-[60px] rounded-md object-cover"
                      src="https://img.etimg.com/thumb/msid-96836017,width-1200,height-900,imgsize-120772,resizemode-8,quality-100/prime/corporate-governance/from-marriotts-to-hyatts-to-le-mridiens-premium-hotel-assets-are-stuck-at-bankruptcy-courts.jpg"
                      alt="Jese image"
                    />
                    <div className="pl-3">
                      <div className=" text-gray-700 font-semibold">
                        {reservation.title}
                      </div>
                      <div className="text-sm font-semibold text-wrap ">
                        {reservation.address}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <div className="">
                        <div className=" text-gray-700 font-semibold">
                          {reservation.date.startDate}
                        </div>
                        <div className="text-sm font-semibold">
                          {reservation.date.startTime}
                        </div>
                      </div>
                      <div>-</div>
                      <div className="">
                        <div className=" text-gray-700 font-semibold">
                          {reservation.date.endDate}
                        </div>
                        <div className="text-sm font-semibold">
                          {reservation.date.endTime}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="pl-3">
                      <TbMessage2 size={26} />
                    </div>
                  </td>{" "}
                  <td className="px-6 py-4">
                    <div className="pl-3">{Status(reservation.status)}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="pl-3">
                      <div className="text-sm text-gray-500 font-semibold">
                        Revenue
                      </div>
                      <div className="font-normal ">${reservation.revenue}</div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      <Panel
        header={
          <>
            <div className="flex justify-between items-center ">
              <span className="font-bold text-gray-700">To-Dos</span>
              <span className="text-semibold text-[#ACC2DB] text-xl">02</span>
            </div>
          </>
        }
        key="todo"
        showArrow={false}
        style={{
          background: "white",
          margin: "10px 0",
          borderRadius: "10px",
          border: "none",
        }}
      >
        <div className="relative overflow-x-auto">
          <table className=" min-w-[1000px] w-full   text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody>
              {todoData.map((todo, index) => (
                <>
                  <tr
                    className="bg-white border-b-2  hover:bg-gray-50 border-[#FAB815]"
                    key={index}
                  >
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-[60px] h-[60px] rounded-md object-cover"
                        src="https://img.etimg.com/thumb/msid-96836017,width-1200,height-900,imgsize-120772,resizemode-8,quality-100/prime/corporate-governance/from-marriotts-to-hyatts-to-le-mridiens-premium-hotel-assets-are-stuck-at-bankruptcy-courts.jpg"
                        alt="Jese image"
                      />
                      <div className="pl-3">
                        <div className="text-sm text-gray-500 font-semibold">
                          Task Name
                        </div>
                        <div className="font-normal ">{todo.taskName}</div>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      <div className="pl-3">
                        <div className="text-sm text-gray-500 font-semibold">
                          Property Name
                        </div>
                        <div className="font-normal ">{todo.propertyName}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="pl-3">
                        <div className="text-sm text-gray-500 font-semibold">
                          Amenity Name
                        </div>
                        <div className="font-normal ">{todo.amenityName}</div>
                      </div>
                    </td>{" "}
                    <td className="px-6 py-4">
                      <div className="pl-3">
                        <div className="text-sm text-gray-500 font-semibold">
                          Due Date
                        </div>
                        <div className="font-normal ">{todo.dueDate}</div>
                      </div>
                    </td>{" "}
                    <td className="px-6 py-4">
                      <div className="pl-3">
                        <div className="font-normal ">
                          {Status(todo.status)}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="pl-3">
                        <div className="text-sm text-gray-500 font-semibold">
                          Delegate
                        </div>
                        <div className="font-normal ">{todo.delegate}</div>
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      <Panel
        header={
          <>
            <div className="flex justify-between items-center ">
              <span className="font-bold text-gray-700">Amenities</span>
              <span className="text-semibold text-[#ACC2DB] text-xl">04</span>
            </div>
          </>
        }
        key="Amenities"
        showArrow={false}
        style={{ background: "white", borderRadius: "10px", border: "none" }}
      >
        <div className="relative overflow-x-auto">
          <table className=" min-w-[1000px] w-full   text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
            <tbody>
              {amenitiesData.map((amenity, index) => (
                <tr
                  className="bg-white border-b-2  hover:bg-gray-50 border-[#FAB815]"
                  key={index}
                >
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-[60px] h-[60px] rounded-md object-cover"
                      src="https://img.etimg.com/thumb/msid-96836017,width-1200,height-900,imgsize-120772,resizemode-8,quality-100/prime/corporate-governance/from-marriotts-to-hyatts-to-le-mridiens-premium-hotel-assets-are-stuck-at-bankruptcy-courts.jpg"
                      alt="Jese image"
                    />
                    <div className="pl-3">
                      <div className="text-sm text-gray-500 font-semibold">
                        Amenity
                      </div>
                      <div className="font-normal ">{amenity.amenity}</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    <div className="pl-3">
                      <div className="text-sm text-gray-500 font-semibold">
                        Property Name
                      </div>
                      <div className="font-normal ">{amenity.propertyName}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="pl-3">
                      <div className="text-sm text-gray-500 font-semibold">
                        Price
                      </div>
                      <div className="font-normal ">{amenity.price}$</div>
                    </div>
                  </td>{" "}
                  <td className="px-6 py-4">
                    <div className="pl-3">
                      <div className="text-sm text-gray-500 font-semibold">
                        Deposite
                      </div>
                      <div className="font-normal ">{amenity.deposite}$</div>
                    </div>
                  </td>{" "}
                  <td className="px-6 py-4">
                    <div className="pl-3">
                      <div className="text-sm text-gray-500 font-semibold">
                        Availability
                      </div>
                      <div className="font-normal ">
                        {amenity.availability}%
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="pl-3">
                      <div className="text-sm text-gray-500 font-semibold">
                        Delegate
                      </div>
                      <div className="font-normal ">{amenity.delegate}</div>
                    </div>
                  </td>
                </tr>
              ))}{" "}
            </tbody>
          </table>
        </div>
      </Panel>
    </Collapse>
  );
}
