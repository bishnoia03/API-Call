import { Component, OnInit } from '@angular/core';
import { ServemeService} from '../serveme.service';
import { DeleteService } from '../delete.service';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  public name = '';
  post: any[];
  constructor(private serveus: ServemeService, private delet: DeleteService) {

    this.serveus.getme().subscribe(
      response => {
      console.log(response.json());
      this.post = response.json();
    });
  }
  deletePost(post) {
    this.delet.deleteme(post)
          .subscribe(response => {
            const index = this.post.indexOf(post);
            this.post.splice(index, 1);
          });
      }

  // createPost(input: HTMLInputElement) {
  //   const post: any = { title: input.value };
  //   input.value = '';

  //   this.http.post(this.url, JSON.stringify(post))
  //     .subscribe(response => {
  //       post['id'] = response.json().id;
  //       this.post.splice(0, 0, post);
  //       console.log(response.json());
  //     });
  // }
//
//   updatePost(post) {
//     this.http.patch(this.url  + post.id, JSON.stringify({isRead: true})).subscribe( res => {
//  console.log(res.json());
//  this.http.get(res.json());
//     });
//    }

  ngOnInit() {
  }

}
