import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Forgot from "../pages/Authentication/Forgot";
import Dashboard from "../pages/Dashboard/Dashboard";
import Amenities from "../pages/Amenities/Amenities";
import Todo from "../pages/Todo/Todo";
import Account from "../pages/Account/Account";
import Help from "../pages/Help/Help";
import Metrics from "../pages/Metrics/Metrics";
import Messages from "../pages/Messages/Messages";
import Tenants from "../pages/Tenants/Tenants";
import Delegates from "../pages/Delegates/Delegates";
import Management from "../pages/Management/Management";
import OwnerLayout from "../layouts/OwnerLayout";
import AdminProtectedRoute from "../AdminProtectedRoute";
import ProtectedRoute from "../ProtectedRoute";
import AdminLogin from "../pages/Authentication/Admin/AdminLogin";
import HomePage from "../pages/HomePage";
import OwnerReservation from "../pages/Reservation/OwnerReservation";
import EditReservation from "../pages/Reservation/EditReservation";
import EditTodo from "../pages/Todo/EditTodo";
import EditAmenities from "../pages/Amenities/EditAmenities";
import AddAmenity from "../pages/Amenities/AddAmenity";
import MetricsComments from "../pages/Metrics/MetricsComments";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  //Admin Panel
  {
    path: "/admin",
    element: (
      <AdminProtectedRoute>
        <MainLayout>
          <Outlet />
        </MainLayout>
      </AdminProtectedRoute>
    ),

    children: [
      {
        path: "",
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },

      {
        path: "metrics",
        element: <Metrics />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "management",
        element: <Management />,
      },
    ],
  },
  //Owner  Panel
  {
    path: "/owner",
    element: (
      <ProtectedRoute>
        <OwnerLayout>
          <Outlet />
        </OwnerLayout>
      </ProtectedRoute>
    ),

    children: [
      {
        path: "",
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "todo",

        children: [
          { path: "", index: true, element: <Todo /> },
          {
            path: ":id",
            element: <EditTodo />,
          },
        ],
      },
      {
        path: "amenities",

        children: [
          { path: "", index: true, element: <Amenities /> },
          {
            path: "add",
            element: <AddAmenity />,
          },
          {
            path: ":id",
            element: <EditAmenities />,
          },
        ],
      },
      {
        path: "tenants",
        element: <Tenants />,
      },
      {
        path: "delegates",
        element: <Delegates />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "metrics",

        children: [
          { path: "", index: true, element: <Metrics /> },
          {
            path: "comments/:id",
            element: <MetricsComments />,
          },
        ],
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "reservation",
        children: [
          { path: "", index: true, element: <OwnerReservation /> },
          {
            path: ":id",
            element: <EditReservation />,
          },
        ],
      },
    ],
  },

  //Authentication
  {
    path: "/login",
    index: true,
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/admin/login",
    index: true,
    element: (
      <>
        <AdminLogin />
      </>
    ),
  },
  {
    path: "/register",
    index: true,
    element: (
      <>
        <Register />
      </>
    ),
  },

  {
    path: "/forgot",
    index: true,
    element: (
      <>
        <Forgot />
      </>
    ),
  },
  {
    path: "*",
    index: true,
    element: (
      <>
        <NotFound />
      </>
    ),
  },
]);
