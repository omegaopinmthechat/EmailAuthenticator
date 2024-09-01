export default function UserInfo() {
    return (
        <>
          <div className="flex items-center justify-center min-h-screen bg-slate-400">
            <div className="flex-col justify-center py-6 text-center rounded-lg shadow-xl h-80 w-96 bg-slate-500">
                <div className="h-10">
                    Name: <span className="font-bold">Amar</span>
                </div> 
                <div className="h-10" >
                    email: <span className="font-bold">new@gmail.com</span>
                </div>
                <div>
                    <button className="p-2 bg-red-600 rounded-xl">Log Out</button>
                </div>
            </div>
          </div>
        </>
    );
}