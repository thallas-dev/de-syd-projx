import {
	Card,
	CardContent,
	CardFooter,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@de-syd-projx/reactjs";

const notifications = [
	{
		title: "Your call has been confirmed.",
		description: "1 hour ago",
	},
	{
		title: "You have a new message!",
		description: "1 hour ago",
	},
	{
		title: "Your subscription is expiring soon!",
		description: "2 hours ago",
	},
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Hello Cary</h1>
			<Card className="w-[380px] p-5">
				<CardHeader>
					<CardTitle>Notifications</CardTitle>
					<CardDescription>You have 3 unread messages.</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4">
					<div className=" flex items-center space-x-4 rounded-md border p-4 mt-5">
						<div className="flex-1 space-y-1">
							<p className="text-sm font-medium leading-none">
								Push Notifications
							</p>
							<p className="text-sm text-muted-foreground">
								Send notifications to device.
							</p>
						</div>
					</div>
					<div>
						{notifications.map((notification, index) => (
							<div
								key={index}
								className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
							>
								<span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
								<div className="space-y-1">
									<p className="text-sm font-medium leading-none">
										{notification.title}
									</p>
									<p className="text-sm text-muted-foreground">
										{notification.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</main>
	);
}
