using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class goRIGHT : MonoBehaviour
{
    Animator m_animator;
    // Start is called before the first frame update
    void Start()
    {

        m_animator = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {

        bool moveRightpressed = Input.GetKey("d");
        m_animator.SetBool("moveRight", moveRightpressed);
    }
}