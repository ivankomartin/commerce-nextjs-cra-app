import { Link } from "react-router-dom";

export default function Breadcrumbs() {
    return (
        <div className="w-full px-4">
            <ul className="flex flex-wrap items-center mb-8">
                <li className="mr-5">
                    <Link
                        className="inline-block mr-5 text-xs font-normal text-black underline uppercase "
                        to="/"
                    >
                        HOME
                    </Link>
                    <span className="inline-block">
                        <svg
                            width="6"
                            height="11"
                            viewBox="0 0 6 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.131073 0.755835C-0.0436907 0.581885 -0.0436907 0.302414 0.131073 0.129744C0.305837 -0.0429273 0.588197 -0.0435662 0.76296 0.129744L5.86893 5.18707C6.04369 5.35975 6.04369 5.63922 5.86893 5.81317L0.762959 10.8705C0.588196 11.0432 0.305836 11.0432 0.131072 10.8705C-0.0436916 10.6972 -0.0436916 10.4171 0.131072 10.2444L4.78774 5.4998L0.131073 0.755835Z"
                                fill="#151515"
                            ></path>
                        </svg>
                    </span>
                </li>
                <li className="mr-5">
                    <Link
                        className="inline-block mr-5 text-xs font-normal text-black underline uppercase "
                        to="/"
                    >
                        WATER FILTERS
                    </Link>
                    <span className="inline-block">
                        <svg
                            width="6"
                            height="11"
                            viewBox="0 0 6 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.131073 0.755835C-0.0436907 0.581885 -0.0436907 0.302414 0.131073 0.129744C0.305837 -0.0429273 0.588197 -0.0435662 0.76296 0.129744L5.86893 5.18707C6.04369 5.35975 6.04369 5.63922 5.86893 5.81317L0.762959 10.8705C0.588196 11.0432 0.305836 11.0432 0.131072 10.8705C-0.0436916 10.6972 -0.0436916 10.4171 0.131072 10.2444L4.78774 5.4998L0.131073 0.755835Z"
                                fill="#151515"
                            ></path>
                        </svg>
                    </span>
                </li>
                <li>
                    <span className="inline-block text-xs font-normal text-gray-400 uppercase ">
                        BRILE WATER FILTER CARAFE
                    </span>
                </li>
            </ul>
        </div>
    );
}
