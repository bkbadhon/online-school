import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineEventNote } from "react-icons/md";
import { TiGroup } from "react-icons/ti";

const Service = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold">All-In-One <span className="text-[#11e7d9]">Cloud Software <span className='animate-ping'>.</span></span> </h2>
                <p>TOTC is one powerful online software suite that combines all the tools <br /> needed to run a successful school or office.
</p>
            </div>
             <div className="my-16 flex flex-wrap justify-center gap-24">
                <div className="text-center  relative border-2 rounded-xl border-[#11e7d9] shadow-xl items-center justify-center py-12 w-72">
                    <div className="">
                        <MdOutlineEventNote  className="text-2xl bg-[#11e7d9] rounded-full p-1  text-white absolute -top-3  ml-32"/>
                    </div>
                    <h2 className="text-2xl font-semibold mb-5">Online Billing, <br /> Invoicing, & Contracts</h2>
                    <p className="w-64 mx-auto">Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
                </div>
                <div className="text-center relative rounded-xl border-2 border-[#11e7d9] shadow-lg items-center justify-center py-12 w-72">
                    <div className="">
                        <FaRegCalendarAlt  className="text-2xl bg-[#11e7d9] rounded-full p-1  text-white absolute -top-3  ml-32"/>
                    </div>
                    <h2 className="text-2xl font-semibold mb-5">Easy Scheduling & <br /> Attendance Tracking</h2>
                    <p className="w-64 mx-auto">Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
                </div>
                <div className="text-center relative rounded-xl border-2 border-[#11e7d9] shadow-lg items-center justify-center py-12 w-72">
                    <div className="">
                    <TiGroup  className="text-2xl bg-[#11e7d9] rounded-full p-1  text-white absolute -top-3  ml-32"/>
                    </div>
                    <h2 className="text-2xl font-semibold mb-5">Customer Tracking</h2>
                    <p className="w-64 mx-auto">Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </p>
                </div>
             </div>
        </div>
    );
};

export default Service;