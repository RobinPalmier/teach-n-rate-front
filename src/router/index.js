import AdminView from '../components/AdminView';
import Login from '../components/Login';
import StudentView from '../components/StudentView';
import TeacherView from '../components/TeacherView';


export const roadMap = [
    { path: "/login", name: "Connexion", component: Login },
    { path: "/admin", name: "Administration", component: AdminView },
    { path: "/student", name: "Étudiant", component: StudentView },
    { path: "/teacher", name: "Professeur", component: TeacherView },
    { redirect: true, path:"/", to:"/login", name: "Connexion"}
];