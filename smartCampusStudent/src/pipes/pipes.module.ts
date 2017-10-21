import { NgModule } from '@angular/core';
import { UserProfilePipe } from './user-profile/user-profile';
@NgModule({
	declarations: [UserProfilePipe],
	imports: [],
	exports: [UserProfilePipe]
})
export class PipesModule {}
